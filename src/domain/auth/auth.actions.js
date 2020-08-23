import rootActions from '../../redux/root.actions'

const types = {
  SET_AUTH_INFO: 'auth.SET_AUTH_INFO',
}

const setAuthInfo = (payload) => ({
  type: types.SET_AUTH_INFO,
  payload,
})

const signOut = () => (dispatch) => {
  dispatch(setAuthInfo({ isAuthenticated: false }))
  dispatch(rootActions.resetState())
}

const authActions = {
  types,
  setAuthInfo,
  signOut,
}

export default authActions
