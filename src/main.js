import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/store"
import './assets/main.css'
import router from "./modules/routersModule/router"

createApp(App).use(router).use(store).mount('#app')
