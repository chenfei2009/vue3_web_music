/**
 * 基于 axios 封装的请求模块
 */
import axios from 'axios'

// 创建 axios 实例
// 通过这个实例去发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
  baseURL: 'http://localhost:3000/', // 请求的基础路径
  withCredentials: true,
  // 定义后端返回的原始数据的处理
  // 参数 data 就是后端返回的原始数据（未经处理的 JSON 格式字符串）
  transformResponse: [data => {
    try {
      // 如果转换成功，则直接把结果返回
      // return data
      return JSON.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      // 如果转换失败了，则进入这里
      // 我们在这里把数据原封不动的直接返回给请求使用
      return data
    }
  }]
})

// 导出请求方法
export default request
