import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import Store from '@/store/index.ts'
import Router from '@/router'

createApp(App)
  .use(Store)
  .use(Router)
  .mount('#app')
