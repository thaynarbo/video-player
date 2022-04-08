import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-progress/Bar'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/AntDesign';

export  function VideoPlayer() {
  return (
    <View style={styles.container}>
        <View style={styles.videoContainer}>
            <Video source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}} style={styles.video} resizeMode={'cover'} repeat/>   
       <View style={styles.controls}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <TouchableWithoutFeedback>
              <Icon name="play" size={18} color="#FFF" />
            </TouchableWithoutFeedback>
          <ProgressBar progress={0.4} color="#FFF" width={210} />
          </View>
       </View>
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
 
},
controls:{
  position:'absolute',
  backgroundColor:'rgba(0,0,0,0.5)',
  width:'100%',
  height: 30,
  bottom: 0,
  justifyContent:'center',
  alignItem:'center'
}
})