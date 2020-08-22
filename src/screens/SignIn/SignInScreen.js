import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({})

const SignInScreen = () => {
  return (
    <View>
      <TextInput style={styles.nameInput} placeHolder="Your Name" />
    </View>
  )
}

export default SignInScreen
