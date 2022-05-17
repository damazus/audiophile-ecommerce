import {createApp} from 'vue'
import './sass/app.scss'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'

import { defineStore } from 'pinia'


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

