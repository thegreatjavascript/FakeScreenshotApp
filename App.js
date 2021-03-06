import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation'
import React from 'react'
import { Root } from 'native-base'
import Main from './src/Main'
import SideBar from './src/common/SideBar'
import WeiXin from './src/screens/WeiXin/Index'
import QQ from './src/screens/QQ'
import { Dimensions } from 'react-native'
// 禁用所有黄色警告
console.disableYellowBox = true
// 将报错（会在屏幕上弹出，影响操作）转换为异常（只会在控制台报错，不影响操作）
console.reportErrorsAsExceptions = false

const deviceWidth = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
  { Home: Main, WeiXin: WeiXin, QQ: QQ },
  {
    initialRouteName: 'WeiXin',
    drawerWidth: deviceWidth * 0.6,
    contentComponent: SideBar
  }
)

const Stack = createAppContainer(
  createStackNavigator(
    {
      Drawer: Drawer
    },
    {
      initialRouteName: 'Drawer',
      headerMode: 'none'
    }
  )
)

export default () => (
  <Root>
    <Stack />
  </Root>
)
