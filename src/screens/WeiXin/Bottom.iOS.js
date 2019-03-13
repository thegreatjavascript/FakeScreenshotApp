import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
module.exports = class WeiXin extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'rgb(234,234,234)', flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>Bottom</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
