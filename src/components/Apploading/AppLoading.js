/**
 * @flow
 */

import React, { memo, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { BackHandler, View, ActivityIndicator, StyleSheet } from 'react-native'

import colors from '../../styles/colors'

import selectors from './appLoading.selectors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: { alignItems: 'center', flex: 1, backgroundColor: colors.blackOpacity },
})

const AppLoading = () => {
  const isLoading = useSelector(selectors.getIsLoading)
  const disableBackButton = useCallback(() => true, [])

  useEffect(() => {
    if (isLoading) {
      BackHandler.addEventListener('hardwareBackPress', disableBackButton)
    } else {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton)
    }
  }, [isLoading])

  if (!isLoading) {
    return null
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color="red" style={styles.indicator} />
    </View>
  )
}

export default memo<{}>(AppLoading)
