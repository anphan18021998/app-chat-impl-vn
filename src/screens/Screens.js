import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { screenNames } from '../config'

import ConversationScreen from './Conversation'
import MainScreen from './Main'
import SignInScreen from './SignIn'

const Stack = createStackNavigator()

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name={screenNames.main} component={MainScreen} />
          <Stack.Screen name={screenNames.signIn} component={SignInScreen} />
          <Stack.Screen name={screenNames.conversation} component={ConversationScreen} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Screens
