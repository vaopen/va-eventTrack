import { VueConstructor } from 'vue'

/**
 * 获取路由源信息
 * @author blacklisten
 * @date 2020-03-18
 * @param {any} route:any
 * @returns {any}
 */
const getRouteOptions = (route: any) => {
  if (!route || !route.path) {
    return {
      routeName: route.name,
      routePath: window.location.hash
    }
  } else {
    const optionsQuery: any = {}
    if (route.query && Object.keys(route.query).length > 0) {
      Object.keys(route.query).map((name) => {
        if (route.query[name]) {
          optionsQuery[name] = route.query[name]
        }
      })
    }
    const optionsParams: any = {}
    if (route.params && Object.keys(route.params).length > 0) {
      Object.keys(route.params).map((name) => {
        if (route.params[name]) {
          optionsParams[name] = route.params[name]
        }
      })
    }
    let routePath = `${route.path}`
    const query: any = []
    const params: any = []
    Object.keys(optionsQuery).map((name) => {
      query.push(`${name}=${optionsQuery[name]}`)
    })
    Object.keys(optionsParams).map((name) => {
      params.push(`${name}=${optionsParams[name]}`)
    })

    if (query.length || params.length) {
      routePath = `${route.path}?${query.length ? 'query:' + query.join('&') : ''}&${params.length ? '&params:' + params.join('&') : ''}`
    }
    return {
      routeName: route.name,
      routePath
    }
  }
}

let toRoute: any = {}
let fromRoute: any = {}

export const install = (Vue: VueConstructor, options: any) => {
  let toRouteOptions: any
  let fromRouteOptions: any
  if (options.router) {
    // 监听路由钩子
    options.router.afterEach((to: any, from: any) => {
      if (Object.keys(toRoute).length) {
        fromRoute = Object.assign({}, toRoute)
      } else {
        fromRoute = Object.assign({
          time: Date.now()
        }, from)
      }
      toRoute = Object.assign({
        time: Date.now()
      }, to)
      toRouteOptions = getRouteOptions(toRoute)
      fromRouteOptions = getRouteOptions(fromRoute)
      if (options.saveEventTrack) {
        options.saveEventTrack({
          toRouteName: toRouteOptions.routeName,
          toRoutePath: toRouteOptions.routePath,
          fromRouteName: fromRouteOptions.routeName,
          fromRoutePath: fromRouteOptions.routePath,
          startTime: fromRoute.time,
          endTime: toRoute.time,
          ...options.params
        })
      }
    })
  }
  Vue.prototype.$eventTrack = {}
  const recordOptions: any = {}
  Object.keys(options.Mapped).map((name) => {
    Vue.prototype.$eventTrack[name] = (opt: any = {}): Promise<any> => {
      if (opt.isRecordTime) {
        recordOptions[name] = {}
        recordOptions[name].startTime = Date.now()
        return new Promise((resolve) => {
          return resolve('Padding.......')
        })
      } else {
        if (options.saveEventTrack) {
          const params = {
            startTime: (recordOptions[name] && recordOptions[name].startTime) ? recordOptions[name].startTime || Date.now() : Date.now(),
            endTimer: Date.now(),
            fromRouteName: fromRouteOptions.routeName || '',
            toRouteName: toRouteOptions.routeName || '',
            ...options.Mapped[name](),
            ...options.params
          }
          return options.saveEventTrack(params).finally(() => {
            recordOptions[name] = null
          })
        } else {
          return new Promise((_, reject) => {
            return reject('No related interface')
          })
        }
      }
    }
  })
}
