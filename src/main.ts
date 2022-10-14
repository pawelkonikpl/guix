import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import VueKonva from 'vue-konva'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueKonva)
app.use(router)

app.mount('#app')
