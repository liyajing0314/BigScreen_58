import { axios } from '@/utils/request'

/**
 * 用户分布
 * @param {Object} params
 */
export function queryUserDistribution(params) {
  return axios({
    url: '/queryUserDistribution',
    method:'post',
    data:params
  })
}


/**
 * 用户活跃趋势
 * @param {Object} params
 */
export function queryUserActivityTrend(params) {
  return axios({
    url: '/queryUserActivityTrend',
    method:'post',
    data:params
  })
}
/**
 * 用户累计增长趋势
 * @param {Object} params
 */
export function queryCumulativeGrowthTrend(params) {
  return axios({
    url: '/queryCumulativeGrowthTrend',
    method:'post',
    data:params
  })
}
/**
 * 前十名用户增长省份
 * @param {Object} params
 */
export function queryUserGrowthProvince(params) {
  return axios({
    url: '/queryUserGrowthProvince',
    method:'post',
    data:params
  })
}
/**
 * 数据统计
 * @param {Object} params
 */
export function queryDataStatistics(params) {
  return axios({
    url: '/queryDataStatistics',
    method:'post',
    data:params
  })
}
/**
 * 地图
 * @param {Object} params
 */
export function queryMap(params) {
  return axios({
    url: '/queryMap',
    method:'post',
    data:params
  })
}
/**
 * 客户端下载量和流量统计
 * @param {Object} params
 */
export function queryClientDownloads(params) {
  return axios({
    url: '/queryClientDownloads',
    method:'post',
    data:params
  })
}
/**
 * 应用场景分布
 * @param {Object} params
 */
export function queryApplicationScenarioDistribution(params) {
  return axios({
    url: '/queryApplicationScenarioDistribution',
    method:'post',
    data:params
  })
}
/**
 * 设备激活情况
 * @param {Object} params
 */
export function queryEquipmentActivated(params) {
  return axios({
    url: '/queryEquipmentActivated',
    method:'post',
    data:params
  })
}
/**
 * 用户年龄分布
 * @param {Object} params
 */
export function queryUserAgeDistribution(params) {
  return axios({
    url: '/queryUserAgeDistribution',
    method:'post',
    data:params
  })
}
/**
 * 用户性别占比
 * @param {Object} params
 */
export function queryUserGenderRatio(params) {
  return axios({
    url: '/queryUserGenderRatio',
    method:'post',
    data:params
  })
}
/**
 * 设备使用情况
 * @param {Object} params
 */
export function queryEquipmentUsage(params) {
  return axios({
    url: '/queryEquipmentUsage',
    method:'post',
    data:params
  })
}
/**
 * 设备分布
 * @param {Object} params
 */
export function queryEquipmentDistribution(params) {
  return axios({
    url: '/queryEquipmentDistribution',
    method:'post',
    data:params
  })
}