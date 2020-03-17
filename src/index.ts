import { VueConstructor } from 'vue'

export const install = (Vue: VueConstructor, options: any) => {
  console.log(options)
  options.router.afterEach((newVal, oldVal) => {
   console.log('watch.$route', newVal, oldVal)
  })
  Vue.prototype.$buriedpoint = {}
  const obj: any = {}
  Object.keys(options.Mapped).map((name) => {
    Vue.prototype.$buriedpoint[name] = (opt: any = {}) => {
      if (opt.start) {
        obj[name] = {}
        obj[name].startTime = Date.now()
      } else {
        console.log({
          startTime: Date.now(),
          endTimer: Date.now(),
          ...options.Mapped[name](),
          ...obj[name]
        })
        if (options.saveBuriedpoint) {
          return options.saveBuriedpoint({
            startTime: Date.now(),
            endTimer: Date.now(),
            ...options.Mapped[name](),
            ...obj[name]
          })
        } else {
          return new Promise(() => {
            throw new Error('没有相关接口')
          })
        }
      }
    }
  })
}
