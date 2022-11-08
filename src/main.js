// 导入 Vue
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'

// 关闭 Vue 的生产环境警告
Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  // el:'#app',
  render: h => h(App),
}).$mount('#app')
