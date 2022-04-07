import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
export  function VideoPlayer() {
  return (
    <View style={styles.container}>
        <View style={styles.videoContainer}>
            <Video source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}} style={styles.video} resizeMode={'cover'} repeat/>   
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  videoContainer:{
  height:213,
  width:302,
  borderRadius:15, 
  position:'relative',
  justifyContent:'center',
  alignItems:'center',
  overflow:'hidden'
},
  video:{
  width:'100%',
  height:'100%',
  position:'absolute'
},
})