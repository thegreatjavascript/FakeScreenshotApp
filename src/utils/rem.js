import { Dimensions } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'

const deviceWidth = Dimensions.get('window').width
const statusBarHeight = ExtraDimensions.get('STATUS_BAR_HEIGHT')
const deviceHeight = Dimensions.get('window').height - statusBarHeight

// 状态栏 540 35
// 页面 540 925
// 头像 60 60
// Header 540 65
// 聊天主界面 540 767
// 底部 540 83

export const height = height => (height / 925) * deviceHeight
export const width = width => (width / 540) * deviceWidth
