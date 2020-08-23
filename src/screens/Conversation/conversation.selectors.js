/**
 * @flow
 */

import { createSelector } from 'reselect'

import conversationsSelectors from '../../domain/conversations/conversations.selectors'

import type { State } from './conversation.reducer'

const chatDetailState = (state: any): State => state.screens.chatDetail
const conversationIdSelector = createSelector(chatDetailState, (state) => state.id)

const conversationSelector = createSelector(
  [conversationsSelectors.conversationsSelector, conversationIdSelector],
  (conversations: any, id: any) => {
    return conversations[id]
  }
)

const chatScreenSelector = {
  conversationSelector,
}

export default chatScreenSelector
