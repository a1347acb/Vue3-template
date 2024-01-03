import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initMicroApp } from './microApp'

initMicroApp()
createApp(App).mount('#app')
