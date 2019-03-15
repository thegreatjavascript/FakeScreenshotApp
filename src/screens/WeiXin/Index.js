import React, { Component } from 'react'
import { View, Text, StatusBar, Platform } from 'react-native'
import Fab from '../../common/Fab'
import { height } from '../../utils/rem'

const Header = Platform.select({
  android: () => require('./Header.Android.js'),
  ios: () => require('./Header.iOS.js')
})()
const Bottom = Platform.select({
  android: () => require('./Bottom.Android.js'),
  ios: () => require('./Bottom.iOS.js')
})()

// 状态栏 540 35
// 页面 540 925
// 头像 60 60
// Header 540 65
// 聊天主界面 540 767
// 底部 540 83
export default class WeiXin extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'rgb(234,234,234)', flex: 1 }}>
        <StatusBar
          backgroundColor={'rgb(234,234,234)'}
          barStyle={'dark-content'}
        />
        <Header />
        <View
          style={{ height: height(767), backgroundColor: 'rgb(234,234,234)' }}
        />
        <Bottom />
        <Fab />
      </View>
    )
  }
}
