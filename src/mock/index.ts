import Mock from 'mockjs';

const API_ROOT = import.meta.env.VITE_BASE_API;

Mock.mock(`${API_ROOT}/user/login`, 'post', options => {
  const body = JSON.parse(options.body);
  return {
    status: true,
    code: 0,
    message: 'success',
    data: {
      token: `<TOKEN> on ${body.username}`,
      step: 1,
    },
  };
});

Mock.mock(`${API_ROOT}/user/auth`, 'post', {
  'status|4-2': true, // 随机返回 true 或 false
  code: 0,
  message: 'random',
  data: null,
});
