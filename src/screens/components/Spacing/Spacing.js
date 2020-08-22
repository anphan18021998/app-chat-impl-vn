/**
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'

import { selectStyles } from '../../../utils'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
})

export default function Spacing({ vertical, horizontal }: { vertical?: number, horizontal?: number }) {
  const spaces = selectStyles(
    {
      condition: horizontal > 0,
      style: { paddingLeft: horizontal },
    },
    {
      condition: vertical > 0,
      style: { paddingTop: vertical },
    }
  )

  return <View style={[styles.container, ...spaces]} />
}

Spacing.defaultProps = {
  vertical: 0,
  horizontal: 0,
}
