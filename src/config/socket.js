import io from 'socket.io-client'

import env from './env'

class Socket {
  init({ token }) {
    this.io = io(env.API_BASE_URL, { query: { userId: token } })
  }

  close() {
    if (!this.io) {
      return
    }

    this.io.removeAllListeners()
    this.io.close()
  }
}

export default new Socket()
