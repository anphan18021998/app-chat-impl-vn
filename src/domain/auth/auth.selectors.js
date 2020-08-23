import { createSelector } from 'reselect'

const getState = (state) => state.auth

const getIsAuthenticated = createSelector(getState, (state) => state.isAuthenticated)

const getAuthToken = createSelector(getState, (state) => state.authToken)

const getTokenType = createSelector(getState, (state) => state.tokenType)

const getAuthHeader = createSelector(getTokenType, getAuthToken, (tokenType, authToken) =>
  [tokenType, authToken].filter(Boolean).join(' ')
)

const getCurrentUser = createSelector(getState, (state) => state.currentUser)

const authSelectors = {
  getAuthToken,
  getIsAuthenticated,
  getAuthHeader,
  getCurrentUser,
}

export default authSelectors
