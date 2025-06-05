import { createRouter, createWebHistory } from "vue-router";
import { routes as documentRoutes } from "./routes"; // 导入你定义的 DocumentRoute
import { getRouteTree } from "@/utils/getRouteTree"; // 导入 getRouteTree
import { parseRoutes } from "@/utils/parseRoutes"; // 导入 parseRoutes

// 1. 获取完整的路由树（带有绝对路径）
const rootRouteTree = getRouteTree(documentRoutes);

// 2. 将自定义路由树转换为 Vue Router 能够识别的格式
const vueRouterRoutes = parseRoutes(rootRouteTree);

console.log(rootRouteTree)
console.log(documentRoutes)
console.log(vueRouterRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: vueRouterRoutes, // 将转换后的路由数组赋值给 routes 属性
});

export default router;