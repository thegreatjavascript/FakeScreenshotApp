import React, { Component } from 'react'
import { Fab } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
// import { captureScreen } from 'react-native-view-shot'

export default class FabTool extends Component {
  // onPress = () => {
  //   captureScreen({
  //     format: 'jpg',
  //     quality: 0.8
  //   }).then(
  //     uri => console.log('Image saved to', uri),
  //     error => console.error('Oops, snapshot failed', error)
  //   )
  // }

  render() {
    return (
      <Fab
        direction="up"
        style={{ backgroundColor: 'blue' }}
        position="bottomRight"
        onPress={this.onPress}
      >
        <Icon name="pen" style={{ color: '#000000' }} />
      </Fab>
    )
  }
}
