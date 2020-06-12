import axios from 'axios'
import qs from 'qs'
// 请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log('请求超时')
    return Promise.reject(err)
  },
)
// 响应拦截
axios.interceptors.response.use(
  data => {
    return data
  },
  err => {
    if (err.response) {
      // mixins.showErrorInfo('网络错误，请重试！')
    }
    return Promise.reject(err)
  }
)

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const fetch = ({ url, body, type }) => {
  // axios.defaults.withCredentials = url.indexOf('gethandwork') < 0
  if (type === 'POST') {
    return axios.post(url, qs.stringify(body))
  } else {
    return axios.get(url, { params: body })
  }
}

export default fetch
