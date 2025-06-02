import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../views/Home/HomeLayout.vue";
import Homemain from "@/views/Home/Homemain.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [{
        path: '/',
        component: Homemain
      }]
    }
  ]
})

export default router