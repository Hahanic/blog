<template>
    <n-card embedded>
      <n-flex justify="space-between" align="center" class="mb-3">
        <n-tag :bordered="false">
          {{ props.language }}
        </n-tag>
        <n-text>{{ props.title || '示例' }}</n-text>
        <n-icon size="20" @click="copyCode" class="hover:opacity-80 transition">
          <CopyIcon />
        </n-icon>
      </n-flex>
      <n-scrollbar x-scrollable>
        <n-code :code="props.code" :language="props.language" />
      </n-scrollbar>
    </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CopyIcon } from 'lucide-vue-next';
import { useMessage, type MessageReactive } from 'naive-ui'

const props = defineProps<{
  language: string,
  code: string,
  title?: string
}>()

const message = useMessage()
const lastMessageInstance = ref<MessageReactive | null>(null);

const copyCode = async () => {
  if (lastMessageInstance.value) {
  lastMessageInstance.value.destroy();
  lastMessageInstance.value = null;
  }
  try {
    await navigator.clipboard.writeText(props.code)
    lastMessageInstance.value = message.success('代码已复制到剪贴板！', {
      duration: 1500
    });
  } catch (err) {
    console.error('无法复制代码: ', err);
    lastMessageInstance.value = message.error('复制失败，请手动复制。', {
      duration: 1500
    });
  }
}
</script>

<style scoped>

</style>>