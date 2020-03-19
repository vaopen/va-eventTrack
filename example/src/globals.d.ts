import { Mapped } from './main'

declare module 'vue/types/vue' {
  interface Vue {
    $eventTrack: typeof Mapped
  }
}
