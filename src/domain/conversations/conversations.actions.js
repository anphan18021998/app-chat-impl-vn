/**
 * @flow
 */

import type { Conversation, Message } from '../../types/local'

const types = {
  SET_CONVERSATIONS: 'conversation.SET_CONVERSATIONS',
  SET_CONVERSATION: 'conversation.SET_CONVERSATION',
  ADD_MESSAGE: 'ADD_MESSAGE',
  SET_MESSAGES: 'SET_MESSAGES',
}

const setConversations = (payload: Conversation[]) => ({
  type: types.SET_CONVERSATIONS,
  payload,
})

const setConversation = (payload: Conversation) => ({
  type: types.SET_CONVERSATION,
  payload,
})

const setMessages = (payload: Message[]) => ({
  type: types.SET_MESSAGES,
  payload,
})

const addNewMessage = ({ convId, message }: { convId: string, message: Message }) => ({
  type: types.ADD_MESSAGE,
  payload: { convId, message },
})

const actions = {
  setConversations,
  setConversation,
  addNewMessage,
  setMessages,
  types,
}

export default actions
