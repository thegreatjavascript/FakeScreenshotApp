import { observable } from 'mobx'

class Globe {
  constructor() {}

  @observable weiXinLeftMessage = ''
  @observable weiXinRightMessage = ''
  @observable weiXinMessageList = [
    {
      msg: '测试',
      which: 'left'
    },
    {
      msg: '测试2',
      which: 'left'
    },
    {
      msg: '测试3',
      which: 'right'
    },
    {
      msg: '测试4',
      which: 'left'
    }
  ]
  @observable weiXinRightAvatar = require('../assets/images/kizuna-ai.jpg')
  @observable weiXinLeftAvatar = require('../assets/images/huhu.jpg')

  updateWeiXinLeftMessage(text) {
    this.weiXinLeftMessage = text
  }

  updateWeiXinRightMessage(text) {
    this.weiXinRightMessage = text
  }

  appendMessageToList(which) {
    if (which === 'left') {
      if (!this.weiXinLeftMessage) {
        return
      }
      this.weiXinMessageList.push({ msg: this.weiXinLeftMessage, which })
      this.weiXinLeftMessage = ''
      return
    }
    if (!this.weiXinRightMessage) {
      return
    }
    this.weiXinMessageList.push({ msg: this.weiXinRightMessage, which })
    this.weiXinRightMessage = ''
  }

  appendTimeToList(time) {
    this.weiXinMessageList.push({ type: 'time', time })
  }

  updateWeiXinAvatar(obj, which) {
    if (which === 'left') {
      this.weiXinLeftAvatar = obj
      return
    }
    this.weiXinRightAvatar = obj
  }
}

const globe = new Globe()

export default globe
