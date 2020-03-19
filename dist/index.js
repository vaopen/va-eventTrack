var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 获取路由源信息
 * @author blacklisten
 * @date 2020-03-18
 * @param {any} route:any
 * @returns {any}
 */
var getRouteOptions = function (route) {
    if (!route || !route.path) {
        return {
            routeName: route.name,
            routePath: window.location.hash
        };
    }
    else {
        var optionsQuery_1 = {};
        if (route.query && Object.keys(route.query).length > 0) {
            Object.keys(route.query).map(function (name) {
                if (route.query[name]) {
                    optionsQuery_1[name] = route.query[name];
                }
            });
        }
        var optionsParams_1 = {};
        if (route.params && Object.keys(route.params).length > 0) {
            Object.keys(route.params).map(function (name) {
                if (route.params[name]) {
                    optionsParams_1[name] = route.params[name];
                }
            });
        }
        var routePath = "" + route.path;
        var query_1 = [];
        var params_1 = [];
        Object.keys(optionsQuery_1).map(function (name) {
            query_1.push(name + "=" + optionsQuery_1[name]);
        });
        Object.keys(optionsParams_1).map(function (name) {
            params_1.push(name + "=" + optionsParams_1[name]);
        });
        if (query_1.length || params_1.length) {
            routePath = route.path + "?" + (query_1.length ? 'query:' + query_1.join('&') : '') + "&" + (params_1.length ? '&params:' + params_1.join('&') : '');
        }
        return {
            routeName: route.name,
            routePath: routePath
        };
    }
};
var toRoute = {};
var fromRoute = {};
export var install = function (Vue, options) {
    var toRouteOptions;
    var fromRouteOptions;
    if (options.router) {
        // 监听路由钩子
        options.router.afterEach(function (to, from) {
            if (Object.keys(toRoute).length) {
                fromRoute = Object.assign({}, toRoute);
            }
            else {
                fromRoute = Object.assign({
                    time: Date.now()
                }, from);
            }
            toRoute = Object.assign({
                time: Date.now()
            }, to);
            toRouteOptions = getRouteOptions(toRoute);
            fromRouteOptions = getRouteOptions(fromRoute);
            if (options.saveEventTrack) {
                options.saveEventTrack(__assign({ toRouteName: toRouteOptions.routeName, toRoutePath: toRouteOptions.routePath, fromRouteName: fromRouteOptions.routeName, fromRoutePath: fromRouteOptions.routePath, startTime: fromRoute.time, endTime: toRoute.time }, options.params));
            }
        });
    }
    Vue.prototype.$eventTrack = {};
    var recordOptions = {};
    Object.keys(options.Mapped).map(function (name) {
        Vue.prototype.$eventTrack[name] = function (opt) {
            if (opt === void 0) { opt = {}; }
            if (opt.isRecordTime) {
                recordOptions[name] = {};
                recordOptions[name].startTime = Date.now();
                return new Promise(function (resolve) {
                    return resolve('Padding.......');
                });
            }
            else {
                if (options.saveEventTrack) {
                    var params = __assign(__assign({ startTime: (recordOptions[name] && recordOptions[name].startTime) ? recordOptions[name].startTime || Date.now() : Date.now(), endTimer: Date.now(), fromRouteName: fromRouteOptions.routeName || '', toRouteName: toRouteOptions.routeName || '' }, options.Mapped[name]()), options.params);
                    return options.saveEventTrack(params).finally(function () {
                        recordOptions[name] = null;
                    });
                }
                else {
                    return new Promise(function (_, reject) {
                        return reject('No related interface');
                    });
                }
            }
        };
    });
};
//# sourceMappingURL=index.js.map