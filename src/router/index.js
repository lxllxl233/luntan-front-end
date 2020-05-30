import Vue from 'vue'
import Router from 'vue-router'
import Backstage from "../components/admin/Backstage";
import Login from "../components/login/Login";
import BlogPage from "../components/blog/BlogPage";
import WriteBlog from "../components/blog/WriteBlog";
import BlogMain from "../components/blog/BlogMain";
import LunTanMain from "../components/luntan/LunTanMain";
import Err from "../components/Err";

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
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogPage',
      name: 'BlogPage',
      component: BlogPage
    },
    {
      path: '/writeBlog',
      name: "WriteBlog",
      component: WriteBlog
    },
    {
      path: '/blogMain',
      name: "blogMain",
      component: BlogMain
    },
    {
      path: '/lunTanMain',
      name: "lunTanMain",
      component: LunTanMain
    },
    {
      path: "*",
      name: "err",
      component: Err
    }
  ]
})
