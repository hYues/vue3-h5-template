import '@/assets/css/weui.less';
import '@/assets/css/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia().use(piniaPluginPersistedstate));
app.use(router);

app.mount('#app');

// 本地接口模拟
import '@/mock';

// 调试控制台
import Vconsole from 'vconsole';
if (!import.meta.env.DEV) {
  new Vconsole();
}
