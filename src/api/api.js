import { axios } from '@/utils/request'

/**
 * 
 * @param {Object} params
 */
// export function getServeData(params) {
//   return axios({
//     url: '/servedata/api/getServeData',
//     method:'get',
//     param:params
//   })
// }
export function getServeData(params) {
  return axios({
    url: '/data.json',
    method:'get',
    param:params
  })
}
