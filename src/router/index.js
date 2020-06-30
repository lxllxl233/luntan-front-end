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

import AdminInInfos from "../components/admin/users/AdminInInfos";
import UserInfos from "../components/admin/users/UserInfos";
import ForumInfos from "../components/admin/forum/ForumInfos";
import ForumSort from "../components/admin/forum/ForumSort";
import BlogInfos from "../components/admin/blog/BlogInfos";
import BlogSort from "../components/admin/blog/BlogSort";

import SearchResult from "../components/search/SearchResult";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'BackStage',
      component: Backstage,
      children: [
        {
          path: "adminInfos",
          name: "adminInfos",
          component: AdminInInfos
        },
        {
          path: "userInfos",
          name: "userInfos",
          component: UserInfos
        },
        {
          path: "forumInfos",
          name: "forumInfos",
          component: ForumInfos
        },
        {
          path: "forumSort",
          name: "forumSort",
          component: ForumSort
        },
        {
          path: "blogInfos",
          name: "blogInfos",
          component: BlogInfos
        },
        {
          path: "blogSort",
          name: "blogSort",
          component: BlogSort
        }
      ]
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
    },
    {
      path: "/searchResult/:searchName",
      name: "searchName",
      component: SearchResult,
      props: true
    }
  ]
})
