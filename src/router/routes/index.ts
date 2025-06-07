import { type DocumentRoute } from "../interfaces";

import { routes as routesNotes } from '@/router/routes/notes/index'
import { routes as routesGossip } from "@/router/routes/gossip/index";
import Home from "@/contents/home/index.vue";
import { HomeIcon } from "lucide-vue-next";

export const routes: DocumentRoute = {
  path: '/',
  component: Home,
  name: '首页',
  title: '首页',
  icon: HomeIcon,
  isSidebarHome: true,
  children: [routesNotes, routesGossip]
}