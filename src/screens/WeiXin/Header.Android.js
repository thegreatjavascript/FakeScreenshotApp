import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { height, width } from '../../utils/rem'

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
              width: width(30),
              height: width(30),
              marginLeft: width(15)
            }}
            source={require('../../assets/images/chevron-left.png')}
          />
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
              marginLeft: width(15)
            }}
          >
            欣
          </Text>
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
