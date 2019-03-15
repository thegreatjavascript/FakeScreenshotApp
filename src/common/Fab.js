import React, { Component } from 'react'
import { CameraRoll, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { captureScreen } from 'react-native-view-shot'
import { Toast, Fab } from 'native-base'
import { Drawer, Button } from 'teaset'
import ImagePicker from 'react-native-image-picker'
import mobx from '../utils/mobx'
import { observer } from 'mobx-react'

@observer
class BottomDrawer extends Component {
  appendMessage = () => {}

  pickImage = which => {
    const options = {
      title: '选择图片',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册中选择',
      cancelButtonTitle: '取消',
      quality: 1,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
        alert(JSON.stringify(response.error))
      } else {
        const source = { uri: response.uri }
        mobx.updateWeiXinAvatar(source, which)
      }
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: '#FFFFFF', height: 260, margin: 15 }}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10
          }}
        >
          <Button
            size="sm"
            type="secondary"
            title="添加时间"
            style={{ width: 80 }}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50
              }}
            >
              <Image
                source={mobx.weiXinLeftAvatar}
                resizeMode={'contain'}
                style={{ width: 40, marginRight: 10 }}
              />
              <Button
                onPress={() => this.pickImage('left')}
                size="sm"
                title="选择头像"
                style={{ width: 80 }}
              />
            </View>
            <View>
              <TextInput
                style={{
                  marginVertical: 5,
                  padding: 10,
                  borderColor: '#DDDDDD',
                  color: '#000000',
                  borderRadius: 5,
                  height: 130,
                  borderWidth: 0.5,
                  width: '95%'
                }}
                onChangeText={text => mobx.updateWeiXinLeftMessage(text)}
                value={mobx.weiXinLeftMessage}
                multiline={true}
                textAlignVertical={'top'}
                placeholder={'对方发送消息...'}
                placeholderTextColor={'grey'}
                maxLength={500}
                numberOfLines={3}
              />
              <Button
                onPress={() => mobx.appendMessageToList('left')}
                size="sm"
                title="添加"
                style={{ width: 50, marginTop: 5 }}
              />
            </View>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 50
              }}
            >
              <Button
                onPress={() => this.pickImage('right')}
                size="sm"
                title="选择头像"
                style={{ width: 80 }}
              />
              <Image
                source={mobx.weiXinRightAvatar}
                resizeMode={'contain'}
                style={{ width: 40, marginLeft: 10 }}
              />
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                width: '100%'
              }}
            >
              <TextInput
                style={{
                  marginVertical: 5,
                  padding: 10,
                  borderColor: '#DDDDDD',
                  color: '#000000',
                  borderRadius: 5,
                  height: 130,
                  borderWidth: 0.5,
                  width: '95%'
                }}
                onChangeText={text => mobx.updateWeiXinRightMessage(text)}
                value={mobx.weiXinRightMessage}
                multiline={true}
                textAlignVertical={'top'}
                placeholder={'自己发送消息...'}
                placeholderTextColor={'grey'}
                maxLength={500}
                numberOfLines={3}
              />
              <Button
                onPress={() => mobx.appendMessageToList('right')}
                size="sm"
                title="添加"
                style={{ width: 50, marginTop: 5 }}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

@observer
export default class FabTool extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      opacity: 1
    }
  }

  componentDidMount() {
    this.openBottomDrawer()
  }

  share = () => {}

  openBottomDrawer = () => {
    let view = <BottomDrawer />
    Drawer.open(view, 'bottom')
  }

  capture = () => {
    this.setState(
      {
        opacity: 0
      },
      () => {
        captureScreen({
          format: 'jpg',
          quality: 0.8
        }).then(
          uri => {
            CameraRoll.saveToCameraRoll(uri, 'photo')
              .then(() => {
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
        <Button
          onPress={this.share}
          style={{ backgroundColor: '#34A34F', opacity: opacity }}
        >
          <Icon name="share-alt" style={{ color: '#FFFFFF' }} />
        </Button>
        <Button
          onPress={this.openBottomDrawer}
          style={{ backgroundColor: '#DD5144', opacity: opacity }}
        >
          <Icon name="pencil-alt" style={{ color: '#FFFFFF' }} />
        </Button>
      </Fab>
    )
  }
}
