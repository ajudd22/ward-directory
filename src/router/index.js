import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ScriptureStudyPage from '../views/ScriptureStudyPage.vue'
import DirectoryPage from '../views/DirectoryPage.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ScriptureStudyPage',
    name: 'ScriptureStudyPage',
    component: ScriptureStudyPage,
//    component: () => import('../views/ScriptureStudyPage.vue')
  },
  {
    path: '/DirectoryPage',
    name: 'DirectoryPage',
    component: DirectoryPage,
//    component: () => import('../views/DirectoryPage.vue')
  }
]

})

export default router
