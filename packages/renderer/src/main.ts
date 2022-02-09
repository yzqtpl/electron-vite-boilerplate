import { createApp } from 'vue'
import App from './App.vue'
import './samples/nodejs-api'
import './samples/electron-store'
import './samples/serialport'

import Antd from 'ant-design-vue'
import Login from './Login.vue'

createApp(Login)
  .use(Antd)
  .mount('#app')
  .$nextTick(window.removeLoading)
