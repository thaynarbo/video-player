import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react'
import {VideoPlayer} from '../../components/VideoPlayer'


export function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputFilter} />
        <VideoPlayer />
    </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, alignItems:'center',padding:40,backgroundColor:'rgb(26, 17, 41)'
  },
  inputFilter:{
    height:40,width:300,backgroundColor:'rgba(73, 32, 74, 0.35)',borderRadius:10,color:'#fff',
    marginBottom:30,
  }
})