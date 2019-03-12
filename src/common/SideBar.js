import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Test extends Component {
  componentDidMount() {
    this.props.navigation.toggleDrawer()
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('WeiXin')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
          }}
        >
          <Icon
            name="weixin"
            style={{
              fontSize: 25,
              color: 'grey',
              marginRight: 20,
              width: 40,
              textAlign: 'center'
            }}
          />
          <Text>微信</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('QQ')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
          }}
        >
          <Icon
            name="qq"
            style={{
              fontSize: 25,
              color: 'grey',
              marginRight: 20,
              width: 40,
              textAlign: 'center'
            }}
          />
          <Text>QQ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
