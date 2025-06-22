<template>
  <ArticleContent>
    <n-h1 class="article-1">1. Debounce防抖</n-h1>
    <n-h2 class="article-2" prefix="bar">1.1 事件停止触发一定时间后才会执行回调，常用于搜索框实时搜索和表单验证等场景</n-h2>
    <ArticleCode :code="debonceCode.code" :language="debonceCode.language" />

    <n-h2 class="article-2" prefix="bar">1.2 甚至可以用css实现防抖</n-h2>
    <n-text>怎么写来着，我也忘了，自己百度去吧哈哈哈哈哈(...)</n-text>
    
    <n-h1 class="article-1">2. Throttle节流</n-h1>
    <n-h2 class="article-2" prefix="bar">2.1 在规定时间内无论事件触发多少次，都只执行一次回调，常用于页面滚动等高频事件</n-h2>
    <ArticleCode :code="ThrottleCode.code" :language="ThrottleCode.language" />

  </ArticleContent>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeVars } from 'naive-ui';
import ArticleContent from '@/components/Article/ArticleContent.vue';
import ArticleCode from '@/components/Article/ArticleCode.vue';

interface code {
  code: string
  language: string
}

const debonceCode: code = {code:`
function debounce (fnc, delay) {
  let timeoutID = null;
  return function(...args) {
    if(timeoutID) clearTimeout(timeoutID);
    //if这里如果直接return其实就是一个简单的节流，但不能处理停止触发后的最后一次事件
    const context = this;
    timeoutID = setTimeout(() => {
      fnc.apply(context, args);
      timeoutID = null;
    }, delay);
  }
}
`, language: 'javascript'}

const ThrottleCode: code = {code:`
//每个delay间隔内执行一次，并且能处理停止触发后的最后一次事件
function throttle(fnc, delay) {
  let timeoutID = null;
  let lastArgs = null;
  let lastContext = null;
  let lastExecTime = 0; // 记录上次执行的时间

  return function(...args) {
    const currentTime = Date.now();
    lastArgs = args;
    lastContext = this;

    // 如果距离上次执行时间小于 delay，则不执行，只更新参数和上下文
    if (currentTime - lastExecTime < delay) {
      // 保证在 delay 结束后能执行最后一次
      if (!timeoutID) {
        timeoutID = setTimeout(() => {
          lastExecTime = Date.now(); // 更新执行时间
          fnc.apply(lastContext, lastArgs);
          timeoutID = null;
          lastArgs = null;
          lastContext = null;
        }, delay - (currentTime - lastExecTime)); // 计算还需要等待的时间
      }
    } else {
      // 立即执行
      lastExecTime = currentTime;
      fnc.apply(lastContext, lastArgs);
      // 清除任何可能的定时器，因为已经立即执行了
      if (timeoutID) {
        clearTimeout(timeoutID);
        timeoutID = null;
      }
    }
  };
}
`, language: 'javascript'}

const themeVars = useThemeVars()
const decorationColor = computed(() => themeVars.value.primaryColor.substring(0, 7) + '66')


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
</style>>