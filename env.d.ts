/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MOCK_ENABLE: boolean;
  readonly VITE_ROUTER_AUTOLOAD: boolean;
  readonly VITE_PORT: number;
  readonly VITE_GLOB_APP_TITLE: string;
}
