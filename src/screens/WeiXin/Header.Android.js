import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { width } from '../../utils/rem'
import mobx from '../../utils/mobx'
import { observer } from 'mobx-react';

@observer
class Name extends Component {
  render() {
    return (
      <Text
        style={{
          fontSize: 17,
          color: '#000000',
          marginLeft: width(15)
        }}
      >
        {mobx.weiXinName}
      </Text>
    )
  }
}

module.exports = class WeiXin extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'rgb(234,234,234)',
          borderBottomColor: '#BBBBBB',
          borderBottomWidth: 0.4,
          height: width(65),
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{
              width: width(26),
              height: width(26),
              marginLeft: width(15)
            }}
            source={require('../../assets/images/chevron-left.png')}
          />
          <Name />
        </View>
        <Image
          style={{
            width: width(30),
            height: width(30),
            marginRight: width(25)
          }}
          source={require('../../assets/images/ellipsis.png')}
        />
      </View>
    )
  }
}
