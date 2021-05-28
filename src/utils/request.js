import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
// import {Modal, notification} from 'ant-design-vue'

//自动设置后台服务 baseURL (也可以手工指定写死项目名字)
let baseDomain = window._CONFIG['domianURL'];

// 创建 axios 实例
const service = axios.create({
  baseURL: baseDomain, // api base_url
  timeout: 9000 ,// 请求超时时间
  retry :4, //重新请求次数
  retryDelay :1000, //请求间隙
})

const err = (error) => {
	console.log('错误---')
  if (error.response) {
    let data = error.response.data
    const token = localStorage.getItem('token')
    console.log("------异常响应------",error.response.status)
    switch (error.response.status) {
      case 403:
        // notification.error({ message: '系统提示', description: '拒绝访问',duration: 4})
        break
      case 500:
        //notification.error({ message: '系统提示', description:'Token失效，请重新登录!',duration: 4})
        if(token && data.message=="Token失效，请重新登录"){
			window.location.href = window._CONFIG['hospitalURL']
    //       Modal.error({
    //         title: '登录已过期',
    //         content: '很抱歉，登录已过期，请重新登录',
    //         okText: '重新登录',
    //         mask: false,
    //         onOk: () => {
				// localStorage.clear()
				// window.location.href="/login";
    //         }
    //       })
        }
        break
      case 404:
          // notification.error({ message: '系统提示', description:'很抱歉，资源未找到!',duration: 4})
        break
      case 504:
        // notification.error({ message: '系统提示', description: '网络超时'})
        break
      case 401:
        // notification.error({ message: '系统提示', description:'未授权，请重新登录',duration: 4})
    //     if (token) {
		  // localStorage.clear()
		  // window.location.href="/login";
    //     }
        break
      default:
        // notification.error({
        //   message: '系统提示',
        //   description: data.message,
        //   duration: 4
        // })
        break
    }
  }
  return Promise.reject(error)
};

//超时处理
const axiosRetryInterceptor = (error) => {
	console.log('超时相应处理')
	var config = error.config;
	// If config does not exist or the retry option is not set, reject
	if(!config || !config.retry) return Promise.reject(err);
	
	// Set the variable for keeping track of the retry count
	config.__retryCount = config.__retryCount || 0;
	
	// Check if we've maxed out the total number of retries
	if(config.__retryCount >= config.retry) {
		// notification.error({
		//   message: '系统提示',
		//   description: '请求超时,请重试',
		//   duration: 4
		// })
	    return Promise.reject(err);
	}
	
	// Increase the retry count
	config.__retryCount += 1;
	
	// Create new promise to handle exponential backoff
	var backoff = new Promise(function(resolve) {
	    setTimeout(function() {
	        resolve();
	    }, config.retryDelay || 1);
	});
	
	// Return the promise in which recalls axios to retry the request
	return backoff.then(function() {
	    return axios(config);
	});
}

// request interceptor
service.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
},(error) => {
  return Promise.reject(error)
})

// response interceptor
// service.interceptors.response.use((response) => {
//     return response.data
// }, err)

service.interceptors.response.use((response) => {
    return response.data
}, (error)=>{
	const { config, code, message } = error
	if (code === 'ECONNABORTED' && message.indexOf('timeout')!=-1) { // 请求超时
		console.warn(`请求超时，将在${config.retryDelay / 1000}秒后重试`)
		return axiosRetryInterceptor(error)
	}else{ //一般错误
		return err(error)
	}
})



export {
  service as axios
}