import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { height, width } from '../../utils/rem'

module.exports = class WeiXin extends Component {

  render() {
    return (
      <View
        style={{
          backgroundColor: '#F6F6F6',
          height: width(83),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Image
          style={{
            width: width(40),
            height: width(40),
            marginLeft: width(15),
            marginRight: width(15)
          }}
          source={require('../../assets/images/voice.png')}
        />
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: width(335),
            height: width(60),
            borderRadius: 3
          }}
        />
        <Image
          style={{
            width: width(40),
            height: width(40),
            marginLeft: width(15),
            marginRight: width(20)
          }}
          source={require('../../assets/images/smile.png')}
        />
        <Image
          style={{
            width: width(40),
            height: width(40),
            marginRight: width(15)
          }}
          source={require('../../assets/images/plus.png')}
        />
      </View>
    )
  }
}
