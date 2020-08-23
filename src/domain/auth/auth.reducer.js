import produce from 'immer'

import actions from './auth.actions'

const initialState = {
  isAuthenticated: false,
  authToken: '',
  tokenType: '',
  currentUser: {},
}

/* eslint-disable no-param-reassign */
const authReducer = produce((state, action) => {
  switch (action.type) {
    case actions.types.SET_AUTH_INFO:
      state.isAuthenticated = action.payload.isAuthenticated
      state.authToken = action.payload.authToken
      state.tokenType = action.payload.tokenType
      state.currentUser = action.payload.currentUser
      break

    // no default
  }
}, initialState)

export default authReducer
