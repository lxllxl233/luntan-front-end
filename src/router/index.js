import Vue from 'vue'
import Router from 'vue-router'
import Backstage from "../components/admin/Backstage";
import Login from "../components/login/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'BackStage',
      component: Backstage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
