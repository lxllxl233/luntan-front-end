import Vue from 'vue'
import Router from 'vue-router'
import Backstage from "../components/admin/Backstage";
import Login from "../components/login/Login";
import BlogPage from "../components/blog/BlogPage";
import WriteBlog from "../components/blog/WriteBlog";

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
      path: '/blogPage',
      name: 'BlogPage',
      component: BlogPage
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
    }
  ]
})
