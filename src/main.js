import "core-js/stable";
import "regenerator-runtime/runtime";
import 'babel-polyfill' 
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './utils/rem'


// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';
import './assets/scss/index.scss';

//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import * as api from '@/api/api'
Vue.prototype.$api = api

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
