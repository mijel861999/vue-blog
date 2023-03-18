import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/Login.vue'
import BlogView from '../views/Blog.vue'

import VueCookies from 'vue-cookies'

const routes = [
  { path: '/login', name:'login', component: LoginView},
  { path: '/', name: 'Inicio', component: BlogView, meta: { requiresAuth: true } }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    console.log(to.fullPath)
    console.log(from)

  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    if (isAuthenticated() && to.fullPath === '/login') {
      next('/')
    }
    next()
  }
})

function isAuthenticated() {
  // REALIZAR AUTENTICACIÓN
  const session = VueCookies.get('token-session')
  if(session) {
    return true
  } 

  return false
}

