import Vue from 'vue'
import Router from 'vue-router'
import Backstage from "../components/admin/Backstage";
import Login from "../components/login/Login";
import BlogPage from "../components/blog/BlogPage";
import WriteBlog from "../components/blog/WriteBlog";
import BlogMain from "../components/blog/BlogMain";
import LunTanMain from "../components/luntan/LunTanMain";
import Err from "../components/Err";
import LunTanEdit from "../components/luntan/LunTanEdit";
import LunTanPage from "../components/luntan/LunTanPage";

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
      path: '/blogPage/:id',
      name: 'BlogPage',
      props: true,
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
      path: "/lunTanEdit",
      name: "lunTanEdit",
      component: LunTanEdit
    },
    {
      path: "/lunTanPage/:id",
      name: "lunTanPage",
      props: true,
      component: LunTanPage
    },
    {
      path: "*",
      name: "err",
      component: Err
    }
  ]
})
