<template>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="collapsedWidth"
        :width="width"
        :collapsed="sidebarStore.isCollapsed"
        show-trigger
        @collapse="handleCollapse"
        @expand="handleExpand"
        :native-scrollbar="false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="sidebarStore.isCollapsed"
          :collapsed-width="collapsedWidth"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :indent="indent"
        />
      </n-layout-sider>
</template>

<script setup lang="ts">
import { computed, h, type Component } from 'vue'
import { NEllipsis, NIcon, type MenuOption } from 'naive-ui'
import { File } from 'lucide-vue-next'
import { useWindowStore } from '@/stores/window'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { useRoute, useRouter } from 'vue-router'
import { getRouteTree } from '@/utils/getRouteTree'
import { routes } from '@/router/routes'
import type { DocumentRouteTree } from '@/router/interfaces'

const windowStore = useWindowStore()
const sidebarStore = useSidebarStore()

const handleCollapse = sidebarStore.handleCollapse
const handleExpand = sidebarStore.handleExpand

const collapsedWidth = computed(() => (windowStore.width < 600 ? 0 : 64))//折叠时的宽度
const width = computed(() => (windowStore.width < 600 ? 180 : 240))//展开时的宽度
const indent = computed(() => (windowStore.width < 600 ? 16 : 22))//控制下级菜单向右的缩进距离

const route = useRoute()
const router = useRouter()
const routeTree = getRouteTree(routes)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

//当菜单栏折叠，也就是sidebarStore.isCollapsed，点击菜单项会跳转到分类盒子
function createClickableMenuItemContent (
  labelContent: string,
  keyPath: string,
) {
  return h(
    //标签
    'a',
    //样式和行为
    {
      onClick: (e: MouseEvent) => {
        if(sidebarStore.isCollapsed) {
          e.stopPropagation();
          router.push(keyPath);
        }
      },
    },
    //slots props值
    [
      h(NEllipsis, null, { default: () => labelContent })
    ]
  );
}

const transformHome = (routeTree: DocumentRouteTree): MenuOption => {
  return {
    label: routeTree.name,
    key: routeTree.path,
    icon: routeTree.icon ? renderIcon(routeTree.icon) : renderIcon(File),
  }
}

const transformRoute = (routes: DocumentRouteTree[]): MenuOption[] => {
  return routes.map((route) => ({
    label: () => createClickableMenuItemContent(route.name, route.path),
    key: route.path,
    icon: route.icon ? renderIcon(route.icon) : renderIcon(File),
    children: route.children?.length ? transformRoute(route.children) : undefined,
  }))
}

const divider: MenuOption = {
  key: 'divider',
  type: 'divider',
}
const menuOptionsHome = transformHome(routeTree)
const menuOptionsContent = transformRoute(routeTree.children ?? [])

const menuOptions: MenuOption[] = [menuOptionsHome, divider, ...menuOptionsContent]

const activeKey = computed({
  get: () => route.path,
  set: (path: string) => router.push(path),
})

</script>

<style scoped></style>