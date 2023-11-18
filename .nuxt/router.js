import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f772448a = () => interopDefault(import('..\\pages\\aboutus\\index.vue' /* webpackChunkName: "pages/aboutus/index" */))
const _5ca9edd7 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _820c119c = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _c1ad6506 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _2fd4902c = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _959e256a = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _e9417b4e = () => interopDefault(import('..\\pages\\admin\\panel\\index.vue' /* webpackChunkName: "pages/admin/panel/index" */))
const _479e4bfc = () => interopDefault(import('..\\pages\\admin\\panel\\main.vue' /* webpackChunkName: "pages/admin/panel/main" */))
const _641b6ab6 = () => interopDefault(import('..\\pages\\categories\\_category\\index.vue' /* webpackChunkName: "pages/categories/_category/index" */))
const _97ea1120 = () => interopDefault(import('..\\pages\\products\\_id\\index.vue' /* webpackChunkName: "pages/products/_id/index" */))
const _b6288f64 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _f772448a,
    name: "aboutus"
  }, {
    path: "/admin",
    component: _5ca9edd7,
    name: "admin"
  }, {
    path: "/categories",
    component: _820c119c,
    name: "categories"
  }, {
    path: "/login",
    component: _c1ad6506,
    name: "login"
  }, {
    path: "/products",
    component: _2fd4902c,
    name: "products"
  }, {
    path: "/register",
    component: _959e256a,
    name: "register"
  }, {
    path: "/admin/panel",
    component: _e9417b4e,
    name: "admin-panel"
  }, {
    path: "/admin/panel/main",
    component: _479e4bfc,
    name: "admin-panel-main"
  }, {
    path: "/categories/:category",
    component: _641b6ab6,
    name: "categories-category"
  }, {
    path: "/products/:id",
    component: _97ea1120,
    name: "products-id"
  }, {
    path: "/",
    component: _b6288f64,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
