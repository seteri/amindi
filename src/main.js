import { createApp } from 'vue'
import store from "./store"
import axios from 'axios'
import App from './App.vue'
import router from "./routes"
import "./assets/style.css"

axios.defaults.baseURL = import.meta.env.VITE_DATABASE_URL

createApp(App).use(router).use(store).mount('#app')
