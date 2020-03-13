import { VueConstructor } from 'vue'

export const install = (Vue: VueConstructor, options: any) => {
  let startTimer = null
  Vue.prototype.$buriedpoint = {}
  Object.keys(options.Mapped).map((name) => {
    Vue.prototype.$buriedpoint[name] = (opt: any = {}) => {
      if (opt.start) {
        startTimer = Date.now()
      } else {
        return options.saveBuriedpoint({
          endTimer: Date.now(),
          ...options.Mapped[name],
          ...opt
        })
      }
    }
  })
}
