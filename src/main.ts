import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import Store from '@/store/index.ts'

createApp(App)
  .use(Store)
  .mount('#app')
