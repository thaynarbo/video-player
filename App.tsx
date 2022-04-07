import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import  {Home} from './src/screens/Home';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1
      }}>
     <Home/>
      </View>
    )
  }
}



