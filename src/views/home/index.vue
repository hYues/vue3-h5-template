<script setup lang="ts">
import { USER_LOGIN, USER_AUTH } from '@/api';
import { useUserStore } from '@/stores/user';

const onUserAuth = () => {
  USER_AUTH()
    .then(res => {
      if (res && res.status) {
        showToast({
          message: res?.message ?? '请求成功',
          type: 'success',
          position: 'top',
        });
      } else {
      }
      showToast({
        message: res?.message ?? '请求失败',
        type: 'fail',
        position: 'top',
      });
    })
    .catch(res => {
      console.warn(res);
      showToast({
        message: res?.message ?? '请求失败',
        type: 'fail',
        position: 'top',
      });
    });
};

const onUserLogin = () => {
  USER_LOGIN({ username: new Date().toLocaleString() })
    .then(res => {
      if (res && res.status) {
        const data = res.data;
        if (data?.token) {
          useUserStore().setToken(data?.token);
        }
      } else {
        showToast({
          message: res?.message ?? '请求失败',
          type: 'fail',
          position: 'top',
        });
      }
    })
    .catch(res => {
      console.warn(res);
      showToast({
        message: res?.message ?? '请求失败',
        type: 'fail',
        position: 'top',
      });
    });
};
</script>
<template>
  <div class="page">
    <van-row class="pt-5">
      <van-col span="4"></van-col>
      <van-col span="16">
        <van-button
          @click="onUserLogin"
          class="mr-2"
          >Login</van-button
        >
        <van-button @click="onUserAuth">Auth</van-button>
      </van-col>
      <van-col span="4"></van-col>
    </van-row>
  </div>
</template>
