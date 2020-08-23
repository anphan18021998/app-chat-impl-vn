import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import apiClient from '../../api/client'
import { STATUS_UNAUTHORIZED } from '../../config/constants'

import authSelectors from './auth.selectors'
import authActions from './auth.actions'

export const createApiHandler = (dispatch, getState) => (apiCall) => {
  const state = getState()
  const authHeader = authSelectors.getAuthHeader(state)
  apiClient.authHeader = authHeader

  return apiCall()
}

export const useApiHandler = (errorSelector) => {
  const dispatch = useDispatch()

  const error = useSelector(errorSelector)

  useEffect(() => {
    if (!error || !error.response) {
      return
    }
    switch (error.response.status) {
      case STATUS_UNAUTHORIZED:
        dispatch(authActions.signOut())
        break

      default:
        break
    }
  }, [error])
}
