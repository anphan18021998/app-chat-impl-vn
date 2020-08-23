/**
 * @flow
 */

import { createSelector } from 'reselect'

import type { Conversation } from '../../types/local'
import type { State as ConversationDomainState } from '../../domain/conversations/conversations.reducer'

import type { State } from './conversations.reducer'

const conversationDomainState = (state: any): ConversationDomainState => state.conversations
const conversationsState = (state: any): State => state.screens.chats

const conversationsSelector = createSelector(
  conversationDomainState,
  (state: ConversationDomainState): Conversation[] => {
    const conversations: Conversation[] = Object.values(state.conversations)
    return conversations
  }
)

const chatScreenSelector = {
  conversationsSelector,
}

export default chatScreenSelector
