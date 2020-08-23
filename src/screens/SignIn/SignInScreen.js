/**
 * @flow
 */

import React, { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { Container, Form, Item, Input, Button, Text } from 'native-base'

import actions from './signIn.actions'

const SignInScreen = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const login = useCallback((name: string) => dispatch(actions.login(name)), [])

  return (
    <Container>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Form style={{ marginTop: 100 }}>
        <Item>
          <Input placeholder="username" onChangeText={(text) => setUsername(text)} />
        </Item>
        <Button style={styles.loginBtn} onPress={() => login(username)}>
          <Text>Login</Text>
        </Button>
      </Form>
    </Container>
  )
}

const styles = StyleSheet.create({
  loginBtn: {
    alignSelf: 'center',
    marginTop: 50,
  },
})

export default SignInScreen
