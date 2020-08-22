import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  nameInput: {
    height: 48,
    margin: 24,
    paddingHorizontal: 24,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: 24,
    fontSize: 24,
  },
  title: {
    marginTop: 24,
    marginLeft: 24,
    fontSize: 24,
  },
})

const SignInScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput style={styles.nameInput} placeHolder="Your Name" />
      <TouchableOpacity>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInScreen
