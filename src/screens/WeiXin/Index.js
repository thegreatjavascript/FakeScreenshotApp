import React, { Component } from 'react'
import { View, Text, StatusBar, Platform, Image } from 'react-native'
import Fab from '../../common/Fab'
import { height, width } from '../../utils/rem'
import mobx from '../../utils/mobx'
import { observer } from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler'

const Header = Platform.select({
  android: () => require('./Header.Android.js'),
  ios: () => require('./Header.iOS.js')
})()
const Bottom = Platform.select({
  android: () => require('./Bottom.Android.js'),
  ios: () => require('./Bottom.iOS.js')
})()

@observer
class LeftMessage extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: width(9),
          marginBottom: width(9)
        }}
      >
        <Image
          source={mobx.weiXinLeftAvatar}
          resizeMode={'cover'}
          style={{
            width: width(60),
            height: width(60),
            borderRadius: width(5)
          }}
        />
        <View>
          <Text
            style={{
              maxWidth: width(390),
              marginLeft: width(18),
              backgroundColor: 'rgb(138,231,92)',
              padding: 12,
              paddingHorizontal: 10,
              borderRadius: 5,
              lineHeight: 20
            }}
          >
            {this.props.msg}
          </Text>
          <View
            style={{
              position: 'absolute',
              left: width(9.5),
              top: width(25),
              backgroundColor: 'rgb(138,231,92)',
              width: width(14),
              height: width(14),
              transform: [{ rotate: '45deg' }],
              zIndex: -1
            }}
          />
        </View>
      </View>
    )
  }
}

@observer
class RightMessage extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: width(9),
          marginBottom: width(9)
        }}
      >
        <View>
          <Text
            style={{
              maxWidth: width(390),
              marginRight: width(18),
              backgroundColor: 'rgb(138,231,92)',
              padding: 12,
              paddingHorizontal: 10,
              borderRadius: 5,
              lineHeight: 20
            }}
          >
            {this.props.msg}
          </Text>
          <View
            style={{
              position: 'absolute',
              right: width(12),
              top: width(25),
              backgroundColor: 'rgb(138,231,92)',
              width: width(14),
              height: width(14),
              transform: [{ rotate: '45deg' }],
              zIndex: -1
            }}
          />
        </View>
        <Image
          source={mobx.weiXinRightAvatar}
          resizeMode={'cover'}
          style={{
            width: width(60),
            height: width(60),
            borderRadius: width(5)
          }}
        />
      </View>
    )
  }
}

class Time extends Component {
  render() {
    return (
      <Text
        style={{
          color: 'rgb(169,169,169)',
          fontSize: 12,
          textAlign: 'center',
          marginVertical: width(25)
        }}
      >
        {this.props.msg}
      </Text>
    )
  }
}

// 状态栏 540 35
// 页面 540 925
// 头像 60 60
// Header 540 65
// 聊天主界面 540 767
// 底部 540 83
@observer
export default class WeiXin extends Component {
  getBody = () => {
    let items = mobx.weiXinMessageList.map(({ msg, type, which, key }) => {
      if (type === 'msg') {
        if (which === 'left') {
          return <LeftMessage key={key} msg={msg} />
        } else {
          return <RightMessage key={key} msg={msg} />
        }
      } else if (type === 'time') {
        return <Time key={key} msg={msg} />
      }
    })
    return items
  }

  render() {
    return (
      <View style={{ backgroundColor: 'rgb(234,234,234)', flex: 1 }}>
        <StatusBar
          backgroundColor={'rgb(234,234,234)'}
          barStyle={'dark-content'}
        />
        <Header />
        <ScrollView
          style={{
            height: width(774),
            backgroundColor: 'rgb(234,234,234)',
            paddingLeft: width(12),
            paddingRight: width(12)
          }}
        >
          {this.getBody()}
        </ScrollView>
        <Bottom />
        <Fab />
      </View>
    )
  }
}
