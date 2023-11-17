import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _220d6c5a = () => interopDefault(import('..\\pages\\aboutus\\index.vue' /* webpackChunkName: "pages/aboutus/index" */))
const _1db19836 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4448f033 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _6030f7dc = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _0320fd2b = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _5f879ae8 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _0e5801cc = () => interopDefault(import('..\\pages\\admin\\panel\\index.vue' /* webpackChunkName: "pages/admin/panel/index" */))
const _00c10121 = () => interopDefault(import('..\\pages\\admin\\panel\\main.vue' /* webpackChunkName: "pages/admin/panel/main" */))
const _5d6f5704 = () => interopDefault(import('..\\pages\\categories\\_category\\index.vue' /* webpackChunkName: "pages/categories/_category/index" */))
const _15a45a62 = () => interopDefault(import('..\\pages\\products\\_id\\index.vue' /* webpackChunkName: "pages/products/_id/index" */))
const _a7a12a62 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _220d6c5a,
    name: "aboutus"
  }, {
    path: "/admin",
    component: _1db19836,
    name: "admin"
  }, {
    path: "/categories",
    component: _4448f033,
    name: "categories"
  }, {
    path: "/login",
    component: _6030f7dc,
    name: "login"
  }, {
    path: "/products",
    component: _0320fd2b,
    name: "products"
  }, {
    path: "/register",
    component: _5f879ae8,
    name: "register"
  }, {
    path: "/admin/panel",
    component: _0e5801cc,
    name: "admin-panel"
  }, {
    path: "/admin/panel/main",
    component: _00c10121,
    name: "admin-panel-main"
  }, {
    path: "/categories/:category",
    component: _5d6f5704,
    name: "categories-category"
  }, {
    path: "/products/:id",
    component: _15a45a62,
    name: "products-id"
  }, {
    path: "/",
    component: _a7a12a62,
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
