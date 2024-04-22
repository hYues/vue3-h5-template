import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    token: '',
  }),
  actions: {
    setToken(val: string) {
      this.token = val;
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ['token'],
  },
});
