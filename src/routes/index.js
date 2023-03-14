import { createRouter, createWebHistory } from "vue-router";
const home = () => import("../views/Home.vue")
const dashboard = () => import("../views/Dashboard.vue")
const profile = () => import("../views/Profile.vue")
const AdminPanel = () => import("../views/AdminPanel.vue")
const editUser = () => import("../views/EditUser.vue")
const routes = [
    {path: "/", component: home},
    {
        path: "/dashboard", component:dashboard,
        children: [
            {
                path: "profile", component: profile,

            },


        ]
    },

    {path: "/admin", name: "adminPanel", component: AdminPanel,

    children: [
        {path: "edit/categories/:id", name:"editPop", component: editUser}
    ]

}

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
