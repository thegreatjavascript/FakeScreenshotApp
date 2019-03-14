import React, { Component } from 'react'
import { CameraRoll, View } from 'react-native'
import { Fab } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { captureScreen } from 'react-native-view-shot'
import { Toast, Button } from 'native-base'

export default class FabTool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      height: 300,
      opacity: 1
    }
  }

  capture = () => {
    console.log(0)
    this.setState(
      {
        opacity: 0
      },
      () => {
        console.log(1)
        captureScreen({
          format: 'jpg',
          quality: 0.8
        }).then(
          uri => {
            console.log(2)
            CameraRoll.saveToCameraRoll(uri, 'photo')
              .then(() => {
                console.log(3)
                Toast.show({
                  text: '截屏成功！',
                  buttonText: 'Okay',
                  type: 'success'
                })
              })
              .catch(() => {
                Toast.show({
                  text: '请检查文件存储权限!',
                  buttonText: 'Okay',
                  type: 'danger'
                })
              })
              .finally(() => {
                console.log(4)
                this.setState({ active: false, opacity: 1 })
              })
          },
          () => {
            Toast.show({
              text: '截屏失败!',
              buttonText: 'Okay',
              type: 'danger'
            })
            this.setState({
              opacity: 1,
              active: false
            })
          }
        )
      }
    )
  }

  render() {
    console.log('render')
    const opacity = this.state.opacity

    return (
      <Fab
        active={this.state.active}
        onPress={() => {
          this.setState({ active: !this.state.active })
        }}
        direction="up"
        style={{
          backgroundColor: 'rgb(65,105,239)',
          opacity: opacity
        }}
        position="bottomRight"
      >
        <Icon
          name="ellipsis-v"
          style={{ color: '#FFFFFF', opacity: opacity }}
        />
        <Button
          onPress={this.capture}
          style={{ backgroundColor: '#3B5998', opacity: opacity }}
        >
          <Icon name="camera" style={{ color: '#FFFFFF' }} />
        </Button>
        <Button style={{ backgroundColor: '#34A34F', opacity: opacity }}>
          <Icon name="share-alt" style={{ color: '#FFFFFF' }} />
        </Button>
      </Fab>
    )
  }
}
