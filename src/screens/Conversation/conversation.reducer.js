/**
 * @flow
 */

import produce from 'immer'
import type { Draft } from 'immer'

import actions from './conversation.actions'

export type State = {
  id: string,
}

const initialState: State = {
  id: '',
}

/* eslint-disable no-param-reassign */
const chatDetailReducer = produce((draftState: Draft<State>, action: any) => {
  switch (action.type) {
    case actions.types.FETCH_CONVERSATION:
      draftState.id = action.payload
      break
    default:
      break
  }
}, initialState)

export default chatDetailReducer
