import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { createPinia } from 'pinia'
import router from './router'
import formatters from './utils/formatter'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$f = formatters
app.mount('#app');