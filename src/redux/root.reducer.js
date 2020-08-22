import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'

import actions from './root.actions'

const storage = AsyncStorage

const persistKeys = {
  root: 'root',
  auth: 'auth',
}

const authReducerPersistConfig = {
  key: persistKeys.auth,
  storage,
  blacklist: [],
}

const appReducer = combineReducers({})

const rootReducer = (state, action) => {
  switch (action.type) {
    case actions.types.RESET_STATE:
      Object.values(persistKeys).forEach((persistKey) => {
        storage.removeItem(`persist:${persistKey}`).catch(() => {})
      })

    default:
      return null
  }
}

const rootReducerPersistConfig = {
  key: persistKeys.root,
  storage,
  whitelist: [],
}

export default persistReducer(rootReducerPersistConfig, rootReducer)
