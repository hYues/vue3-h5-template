<script setup lang="ts">
import { onMounted } from 'vue';
import WechatBrowser from './components/WechatBrowser.vue';
import { stopBodyScrollWithBounce } from './libs/utils';
import { onBeforeUnmount } from 'vue';

onMounted(() => {
  // 阻止 IOS 橡皮筋滑动，保持纯单页模式
  stopBodyScrollWithBounce();
});
onBeforeUnmount(() => {
  stopBodyScrollWithBounce(false);
});
</script>
<template>
  <WechatBrowser />
  <RouterView />
</template>
