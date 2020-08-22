import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppLoading } from 'expo'

import Screens from './src/screens'
import { store, persistor } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}
