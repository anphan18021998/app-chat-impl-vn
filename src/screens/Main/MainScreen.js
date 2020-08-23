import React, { useCallback } from 'react'
import { useDispatch,useSelector,useDispatch } from 'react-redux'
import { View, Button, Text, FlatList, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

import authDomain from '../../domain/auth'
import ConversationItem from './components/conversation-list-item'
import useSocket from '../../components/socket/Socket'

const MainScreen = () => {
  const dispatch = useDispatch()
  const fetchConversations = useCallback(() => dispatch(actions.fetchConversations()), [])
  const logout = useCallback(() => dispatch(authDomain.action.logout()), [])
  const conversations = useSelector(selectors.conversationsSelector)

  const onButtonPress = useCallback(() => {
    Alert.prompt(
      'New conversation',
      'Enter a username: ',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (username) => {
            dispatch(actions.createNewConversation(username || ''))
          },
        },
      ],
      'plain-text'
    )
  }, [])

  const onNewConversation = useCallback(
    (data) => {
      dispatch(conversationsDomain.action.setConversation(data.conversation))
    },
    [dispatch]
  )
  const onNewLastMessage = useCallback(
    (data) => {
      dispatch(conversationsDomain.action.addNewMessage({ convId: data.conversation._id, message: data.message }))
    },
    [dispatch]
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="new" onPress={onButtonPress} />,
      headerLeft: () => <Button title="Log out" onPress={logout} />,
    })
  }, [])

  useEffect(() => {
    fetchConversations()
  }, [])

  useSocket({ eventName: 'newConversation', handler: onNewConversation })
  useSocket({ eventName: 'newLatestMessage', handler: onNewLastMessage })

  return (
    <FlatList
      data={conversations}
      renderItem={({ item }) => <ConversationItem conversation={item} />}
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default MainScreen
