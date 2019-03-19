import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Overlay } from 'teaset'
import mobx from '../utils/mobx'

// 消息确认框
class InputDialog {
  constructor() {
    this.key = undefined
  }
  /**
   * @description
   * @param {title}: 弹框的标题
   * @param {options}: 高级选项
   * @param {style}: 自定义样式
   * @param {isModal}: 同Oveylay文档
   * @param {content}: 弹框中间的内容
   * @param {cb}: 确认后的回调函数
   */
  show = (
    title,
    options = { style: {}, isModal: true, content: undefined, cb }
  ) => {
    let overlayView = (
      <Overlay.View
        style={{ alignItems: 'center', justifyContent: 'center' }}
        modal={options.isModal}
        overlayOpacity={0.5}
        ref={v => (this.overlayView = v)}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            width: '85%',
            height: 120,
            borderRadius: 5,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            ...options.style
          }}
        >
          {typeof title === 'string' ? (
            <Text
              style={{
                marginTop: 5,
                fontSize: 18,
                color: '#000000'
              }}
            >
              {title || '提示'}
            </Text>
          ) : (
            title
          )}
          {typeof options.content === 'string' ? (
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                color: '#000000'
              }}
            >
              {options.content}
            </Text>
          ) : (
            options.content
          )}
          <View
            style={{
              alignSelf: 'flex-end',
              flexDirection: 'row',
              marginBottom: 10
            }}
          >
            {options.hideCancel || (
              <TouchableOpacity
                onPress={() => this.overlayView && this.overlayView.close()}
              >
                <Text
                  style={{
                    color: '#DDDDDD',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginRight: 20
                  }}
                >
                  取消
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                options.cb && options.cb()
                this.overlayView && this.overlayView.close()
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#000000'
                }}
              >
                确定
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay.View>
    )
    this.key = Overlay.show(overlayView)
  }

  hide = () => {
    Overlay.hide(this.key)
  }
}
export const inputDialog = new InputDialog()
