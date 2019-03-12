import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Main extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
          <Text>qq</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
