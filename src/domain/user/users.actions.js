const types = {
  SET_USERS: 'AUTH.SET_USERS',
}

const setUsers = (payload) => ({
  type: types.SET_USERS,
  payload,
})

const authActions = {
  types,
  setUsers,
}

export default authActions
