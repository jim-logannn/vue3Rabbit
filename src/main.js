import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import "@/styles/common.scss"
//引入懒加载指令插件并注册
import {lazyPlugin} from "@/directives/index"
// 引入全局组件插件
import { componentPlugin } from '@/components'

const app = createApp(App)
const pinia=createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(lazyPlugin)
app.use(pinia)
app.use(router)
app.use(componentPlugin)
app.mount('#app')