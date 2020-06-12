
import fetch from './ajax'
export const DEBUG = true // 是否开发模式

const CITY_DEV = '' // 测试地址
const CITY_URL = '' // 正式地址
const CITYURLS = DEBUG ? CITY_DEV : CITY_URL
const URL = ''
class XHR {
  getWechatJsSdk (json) {
    return fetch({
      url: '',
      body: json,
      type: 'GET'
    })
  }
}
export default new XHR()
