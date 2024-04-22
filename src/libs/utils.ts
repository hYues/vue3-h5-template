/** 判断是否为微信环境 */
export const isWechat = (): boolean => {
  // 测试环境不进行识别
  if (process.env.NODE_ENV !== 'production') {
    return true;
  }
  return /micromessenger/gi.test(window.navigator.userAgent);
};

/** 停止默认事件 */
const stopDefaultEvent = (e: Event) => {
  e.preventDefault();
};

/** 阻止 IOS 页面橡皮筋滑动 */
export const stopBodyScrollWithBounce = (flag?: boolean) => {
  if (flag === false) {
    // 取消监听
    document.body.removeEventListener('touchmove', stopDefaultEvent);
  } else {
    // 阻止橡皮筋效果
    document.body.addEventListener('touchmove', stopDefaultEvent, {
      passive: false,
    });
  }
};

/** 是否开启深色模式 */
export const isDarkTheme = (): boolean => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/** 预加载图片资源 */
export const preloadImages = (urls: string[]) => {
  const images = urls.map(v => {
    const image = new Image();
    image.src = v;
    return image;
  });

  return Promise.all(
    images.map(image => {
      // 返回一个 Promise 对象，用于检查加载是否完成
      return new Promise((resolve, reject) => {
        if (image.complete) {
          resolve(image);
        } else {
          image.onload = () => {
            resolve(image);
          };
          image.onerror = () => {
            reject(new Error(`Failed to load image's URL: ${image.src}`));
          };
        }
      });
    }),
  );
};
