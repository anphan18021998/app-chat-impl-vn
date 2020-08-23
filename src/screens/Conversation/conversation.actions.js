/**
 * @flow
 */

import createApiHandler from '../../domain/auth/api-handler'
import { ConversationApi } from '../../api'
import conversationActions from '../../domain/conversations/conversations.actions'
import { Message, Conversation } from '../../types/local'

const types = {
  FETCH_CONVERSATION: 'FETCH_CONVERSATION',
  ADD_MESSAGE: 'ADD_MESSAGE',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_CONVERSATIONS: 'conversation.SET_CONVERSATIONS',
  SET_CONVERSATION: 'conversation.SET_CONVERSATION',
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


const fetchConversation = (id: string) => async (dispatch: any, getState: any) => {
  dispatch({ type: types.FETCH_CONVERSATION, payload: id })
  const handleApi = createApiHandler(dispatch, getState)
  try {
    const { data }: { data: Conversation } = await handleApi(() => ConversationApi.fetchConversation(id))
    dispatch(conversationActions.setConversation(data))
  } catch (err) {
    return null
  }
}

const sendMessage = ({ convId, message }: { convId: string, message: Message }) => async (
  dispatch: any,
  getState: any
) => {
  const handleApi = createApiHandler(dispatch, getState)
  try {
    await handleApi(() => ConversationApi.createNewMessage(convId, message))
    dispatch({ type: types.ADD_MESSAGE, payload: { convId, message })
  } catch (err) {}
}

const actions = {
  types,
  fetchConversation,
  sendMessage,
}

export default actions
