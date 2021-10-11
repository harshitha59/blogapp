import Vue from 'vue'
import VueRouter from 'vue-router'
import retrieve from '../views/retrieve.vue'
import blog from '../views/blog.vue'
import updateblog from '../views/updateblog.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: retrieve
  },
  {
    path: '/updateblog',
    name: 'updateblog',
    component: updateblog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
