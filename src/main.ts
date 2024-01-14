import './assets/main.css'
import 'vue-toast-notification/dist/theme-default.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import MiToast from '@/components/global/mi-toast'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)

export const miToast = new MiToast()

app.mount('#app')
