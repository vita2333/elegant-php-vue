import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import UI from '@/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import DemoBlock from '@e/components/DemoBlock'
import DemoSection from '@e/components/DemoSection'

Vue.use(Antd)
Vue.use(UI)
Vue.component(DemoBlock.name, DemoBlock)
Vue.component(DemoSection.name, DemoSection)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
