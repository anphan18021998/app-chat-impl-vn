/**
 * @flow
 */

import React from 'react'
import { View, Text, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Spacing, UserAvatar } from '../../component'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  touchable: {
    height: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  },
  container: {
    paddingVertical: 16,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.grey50,
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingLeft: 16,
  },
  name: {
    fontSize: 20,
  },
})

function ConversationListItem({}) {
  const navigation = useNavigation()

  return (
    <Button transparent style={styles.touchable}>
      <View style={styles.container}>
        <UserAvatar />

        <View style={styles.content}>
          <Text style={styles.name}>{'ConsversationName'}</Text>

          <Spacing vertical={2} />

          <LastMessage message={'ConversationLastMessage'} />
        </View>
      </View>
    </Button>
  )
}

export default ConversationListItem
