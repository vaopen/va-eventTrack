import { Mapped } from './main'

declare module 'vue/types/vue' {
  interface Vue {
    $buriedpoint: typeof Mapped
  }
}
