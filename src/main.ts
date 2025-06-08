import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import naive from "naive-ui"

import 'highlight.js/lib/common'


const app = createApp(App)
const pinia = createPinia()

app.use(naive)
app.use(pinia)
app.use(router)

app.mount('#app')
