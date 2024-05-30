import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'

import router from './router/index.js'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, { zIndex: 3000 })
app.mount('#app')