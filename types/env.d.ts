/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** API 请求地址 */
  readonly VITE_BASE_API: string;
  /** 版权 */
  readonly VITE_APP_COPYRIGHT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
