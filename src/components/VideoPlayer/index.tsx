import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ProgressBar from 'react-native-progress/Bar'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/AntDesign';


export function VideoPlayer() {
  const ref = useRef(null)
  const [paused, setPaused] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const renderIcon = paused ? 'play' : 'pause'

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
          ref={ref}
          style={styles.video} resizeMode={'cover'}
          paused={paused}
          repeat
        />
        <View style={styles.controls}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 15 }} onPress={() => setPaused(!paused)} >
              <Icon name={renderIcon} size={20} color="#e93515" />
            </TouchableOpacity>
            <ProgressBar progress={0.4} color="#FFF" width={210} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  videoContainer: {
    height: 213,
    width: 302,
    borderRadius: 15,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: '100%',

  },
  controls: {
    position: 'absolute',
    width: '100%',
    height: 30,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItem: 'center'
  }
})