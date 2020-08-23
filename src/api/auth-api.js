import client from './client'

const parseUser = (data) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: data._id,
  username: data.username,
})

const parseAuth = (data) => ({
  // eslint-disable-next-line no-underscore-dangle
  authToken: data._id,
  tokenType: 'Bearer',
})

const signIn = async (signInForm) => {
  const response = await client.request(
    {
      method: 'post',
      url: '/users/sign_in',
      data: {
        username: signInForm.username,
      },
    },
    false
  )

  return {
    data: parseAuth(response.data),
    metadata: {
      user: parseUser(response.data),
    },
  }
}

export default {
  signIn,
}
