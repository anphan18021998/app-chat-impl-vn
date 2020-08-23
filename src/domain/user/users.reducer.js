/**
 * @flow
 */

import produce from 'immer'
import type { Draft } from 'immer'

import actions from './users.actions'

export type State = {
  users: User[],
}

const initialState: State = {
  users: [],
}

/* eslint-disable no-param-reassign */
const authDomainReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.SET_USERS:
      draftState.users = action.payload
      break
    default:
      break
  }
}, initialState)

export default authDomainReducer
