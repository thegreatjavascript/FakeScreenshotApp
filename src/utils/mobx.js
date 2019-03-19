import { observable } from 'mobx'

class Globe {
  constructor() {}

  @observable weiXinLeftMessage = ''
  @observable weiXinRightMessage = ''
  @observable weiXinName = '林水溶'
  @observable weiXinMessageList = [
    {
      msg: '测试',
      type: 'msg',
      which: 'left',
      key: 1
    },
    { msg: '2018年4月1日 15:25', type: 'time', key: 2 },
    {
      msg: '测试2',
      type: 'msg',
      which: 'left',
      key: 3
    },
    {
      msg: '测试3',
      type: 'msg',
      which: 'right',
      key: 4
    },
    {
      msg: '测试4',
      type: 'msg',
      which: 'left',
      key: 5
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

  appendMessageToList(obj) {
    if (obj.type === 'msg') {
      if (!obj.msg) {
        return
      }
      if (obj.which === 'left') {
        this.weiXinLeftMessage = ''
      } else {
        this.weiXinRightMessage = ''
      }
    } else if (obj.type === 'time') {
      this.weiXinTime = ''
    }
    this.weiXinMessageList.push({
      ...obj,
      key: new Date()
    })
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

  updateWeiXinTime(time) {
    this.weiXinTime = time
  }
  updateWeiXinName(name) {
    this.weiXinName = name
  }
}

const globe = new Globe()

export default globe
