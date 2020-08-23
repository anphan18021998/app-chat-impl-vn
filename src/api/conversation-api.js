import client from './client'

const parseUser = (data) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: data._id,
  username: data.username,
})

export const parseMessage = (data) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: data._id,
  content: data.content,
  sender: parseUser(data.sender),
  seenBy: data.seenBy.map(parseUser),
  createdAt: new Date(data.createdAt),
})

export const parseConversation = (data) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: data._id,
  members: data.members.map(parseUser),
  messages: data.messages.map(parseMessage),
})

const fetchConversations = async () => {
  const response = await client.request({
    method: 'get',
    url: '/conversations',
  })

  return {
    data: response.data.map(parseConversation),
    metatada: {},
  }
}

const createConversation = async (form) => {
  const response = await client.request({
    method: 'post',
    url: '/conversations',
    data: {
      members: [form.username],
    },
  })

  return {
    data: parseConversation(response.data),
    metadata: {},
  }
}

const fetchConversation = async (id) => {
  const response = await client.request({
    method: 'get',
    url: `/conversations/${id}/messages`,
  })

  return {
    data: {
      id,
      messages: response.data.map(parseMessage),
    },
    metadata: {},
  }
}

const createMessage = async (conversationId, form) => {
  const response = await client.request({
    method: 'post',
    url: `/conversations/${conversationId}/messages`,
    data: {
      content: form.content,
    },
  })

  return {
    data: parseMessage(response.data),
    metadata: {},
  }
}

export default {
  fetchConversations,
  createConversation,
  fetchConversation,
  createMessage,
}
