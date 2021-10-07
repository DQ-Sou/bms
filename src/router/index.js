import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const defaultRouterMap = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: () => import("../views/Login/index.vue")
  }
]
export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: defaultRouterMap
});