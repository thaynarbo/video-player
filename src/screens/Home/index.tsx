import { View, Text } from 'react-native'
import React from 'react'
import {VideoPlayer} from '../../components/VideoPlayer'


export function Home() {
  return (
    <View style={{flex:1}}>
        <VideoPlayer />
    </View>
   
  )
}