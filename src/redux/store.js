import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root.reducer'

const reduxDevtoolsCompose = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancer = reduxDevtoolsCompose || compose

const middlewares = [thunk, logger]

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))
const persistor = persistStore(store)

export { store, persistor }
