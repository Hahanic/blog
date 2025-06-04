import Home from "@/contents/home/index.vue";
import { HomeIcon } from "lucide-vue-next";

export const routes = {
  path: '/',
  component: Home,
  name: 'home',
  title: '主页',
  icon: HomeIcon,
  isSidebarHome: true,
  isConformitiesHidden: true,
}