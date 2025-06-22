<template>
  <ArticleContent>
    <n-h1 class="article-1">1. Vite v6.0.0</n-h1>

    <n-h2 class="article-2" prefix="bar">1.1 简单介绍</n-h2>
    <p>Vite是一款前端构建工具，基于原生ES模块提供了丰富的内建功能，拥有极速的开发服务器启动，闪电般的的模块热更新，内置对各种语法的优化支持减少复杂的配置，生产打包利用Rollup了，确保线上应用小体积高性能</p>

    <n-h2 class="article-2" prefix="bar">1.2 构建迅速</n-h2>
    <div class="paragraph">
      <p>开发环境下，Vite启动一个服务器，将源码直接作为原生ES模块提供给浏览器，浏览器通过入口文件(如index.html内的<n-text code>&lt;script type="module"&gt;</n-text>加载文件，遇到import才会向服务器发送http请求模块。Vite会拦截这些请求，按需即时编译并返回</p>
      <p>生产环境下，通过执行<n-text code>npm run build Vite</n-text>会调用擅长Tree-shaking(移除未使用代码)和各种输出格式优化并最终生成高度整合且性能优越的静态资源文件的Rollup对代码进行打包</p>
    </div>

    <n-h1 class="article-1">2. 使用Vite创建项目</n-h1>

    <n-h2 class="article-2" prefix="bar">2.1 通过<n-text code>npm create vite@latest</n-text>，选择vanilla/vue3/react + typescript创建一个非常干净的项目</n-h2>
    <ArticleCode :code="ViteProject.code" :language="ViteProject.language"  title="项目根目录" />

    <n-h1 class="article-1">3. CSS相关配置</n-h1>

    <n-h2 class="article-2" prefix="bar">3.1 内置.module.css的支持</n-h2>
    <n-h2 class="article-2" prefix="bar">3.2 内置预处理器sass和less的支持</n-h2>
    <n-h2 class="article-2" prefix="bar">3.3 css@import处理</n-h2>

    <n-h1 class="article-1">4. 静态资源</n-h1>

    <n-h2 class="article-2" prefix="bar">4.1 资源目录</n-h2>
    <p>?raw worker url等</p>
    <ArticleCode :code="viteconfig.code" :language="viteconfig.language"  title="vite.config.ts" />

    <n-h2 class="article-2" prefix="bar">4.2 文件的导入</n-h2>
    <div class="paragraph">
      <p>使用修饰符是vite独有的资源查询参数，用来控制资源的导入方式</p>
      <p><n-text code>?raw</n-text>，把文件当作 字符串 导入（通常用于文本、SVG、代码片段）</p>
      <p><n-text code>?url</n-text>，返回该资源的 URL 路径（适用于图片、音频、字体等）</p>
      <p><n-text code>?worker</n-text>，作为Web Worker的入口点导入，而无需手动创建Worker文件或配置复杂的打包流程</p>
      <p><n-text code>&inline</n-text>，将导入的资源内容内联(inline)到主JavaScript或CSS包中</p>
      <ArticleCode :code="viteworker.code" :language="viteworker.language" />
    </div>


    <n-h1 class="article-1">5. 环境变量</n-h1>
    <n-h2 class="article-2" prefix="bar">5.1 环境变量</n-h2>
    <p><n-text code>import.meta.env</n-text></p>
    <p>wc越写越乱，越想越混乱....开摆，这种事情留到暑假(大概</p>
    

  </ArticleContent>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeVars } from 'naive-ui';
import ArticleContent from '@/components/Article/ArticleContent.vue';
import ArticleCode from '@/components/Article/ArticleCode.vue';

const themeVars = useThemeVars()
const decorationColor = computed(() => themeVars.value.primaryColor.substring(0, 7) + '66')

interface code {
  code: string
  language: string
}

const ViteProject: code = {code:
`
### vite-project
src
index.html
package.json
tsconfig.json        //为整个项目设定的Typescript编译选项和规则
tsconfig.app.json    //专门为scr/下的代码准备的Typescript配置文件
tsconfig.node.json   //专门在node环境下运行的Typescript配置文件
vite.config.ts       //Vite 的主配置文件
`, language: 'md'
}
const viteconfig: code = {code:
`
// import vue from '@vitejs/plugin-vue'
// import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: './public',  //静态资源文件夹可以更改
  // plugins: [vue(), tailwindcss()],  //插件的导入
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  //设置路径别名
    }
  }
})
`, language: 'ts'
}

const viteworker: code = {code:
`
//worker.ts
let i = 0
setInterval(() => {
  return postMessage(++i)
}, 1000)

//main.ts
import Worker from './worker.ts?worker'  //若这里是?worker&inline，打包后发现worker.ts合并在main.ts里
const worker = new Worker()
worker.onmessage = (event) => {
  console.log('来自Worker的i值:', event.data)
}
//来自Worker的i值: 1
//来自Worker的i值: 2
//...

import workerRaw from './worker.ts?raw'
console.log(workerRaw)
//字符串(worker.ts的文件内容)
import workerUrl from './worker.ts?url'
console.log(workerUrl)
///src/worker.ts
`, language: 'ts'}

</script>

<style scoped>
.article-1 {
  font-size: 1.4rem;
  border-bottom: 2px dashed v-bind(decorationColor);
  padding-bottom: 0.5em;
}

.article-2 {
  font-size: 1.2rem;
  &:before {
    background-color: v-bind(decorationColor);
  }
}
.paragraph {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>>