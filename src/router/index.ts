import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../views/Home/HomeLayout.vue";
import { routes as routerHome } from '@/router/routes/home/index'
import { routes as routesNotes } from '@/router/routes/notes/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [routerHome, routesNotes]
    }
  ]
})

export default router