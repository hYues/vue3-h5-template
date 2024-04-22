<script setup lang="ts">
import { isWechat, isDarkTheme } from '@/libs/utils';

const theme = isDarkTheme() ? 'dark' : 'light';

const copyright = {
  date: new Date().getFullYear(),
  author: import.meta.env.VITE_APP_COPYRIGHT ?? '',
};
</script>
<template>
  <div
    class="page weui"
    :data-weui-theme="theme"
    v-if="!isWechat()"
  >
    <div class="weui-form">
      <div class="weui-form__bd">
        <div class="weui-form__text-area">
          <h2 class="weui-form__title">温馨提醒</h2>
          <div class="weui-form__desc">请用微信扫一扫打开</div>
        </div>
      </div>
    </div>
    <div class="weui-footer weui-footer_fixed-bottom">
      <div class="weui-footer__text">Copyright &copy; {{ copyright.date }} {{ copyright.author }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/css/init/variables';
@import '@/assets/css/init/functions';

.page.weui {
  z-index: $zoom-mask-env-without-wx;
  @include position(fixed, 0 0);
  @include flex(y, between);
  background: var(--weui-BG-0, $color-background);
  margin: 0 auto;
  letter-spacing: 1px;
  .weui-form {
    background-color: transparent;
  }
}
</style>
