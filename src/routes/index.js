import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/Home.vue")
const dashboard = () => import("../views/Dashboard.vue")
 
const routes = [
    {path: "/", component: home},
    {path: "/dashboard", component:dashboard},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router