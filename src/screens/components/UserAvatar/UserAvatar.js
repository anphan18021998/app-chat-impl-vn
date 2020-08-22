/**
 * @flow
 */

import React, { memo } from 'react'
import { Image, StyleSheet } from 'react-native'

import DefaultAvatarPicture from './DefaultAvatarPicture.png'

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    borderRadius: 999,
    overflow: 'hidden',
    height: undefined,
    aspectRatio: 1,
  },
})

const UserAvatar = ({ style }: any) => {
  return <Image source={DefaultAvatarPicture} style={[styles.avatar, style]} />
}

export default memo(UserAvatar)
