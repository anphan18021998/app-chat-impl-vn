import React from 'react'
import { View, Button, Text, FlatList, StyleSheet } from 'react-native'
import { Icon } from 'native-base'

// import ConversationItem from './components/conversation-list-item'
// import Invitation from './components/invitation'

const MainScreen = () => {
  return (
    <>
      <View>
        <Button full transparent>
          <Icon name="add" />
          <Text>New conversation</Text>
        </Button>
      </View>

      <FlatList
        style={styles.container}
        data={conversations}
        renderItem={({ item, index }) => {
          return <ConversationItem conversation={item} />
        }}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<Spacing vertical={insets.bottom + 30} />}
        onRefresh={fetchConversations}
        refreshing={false}
      />
    </>
  )
}

export default MainScreen
