import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/Login.vue'
import BlogView from '../views/Blog.vue'

const routes = [
  { path: '/login', component: LoginView },
  { path: '/', component: BlogView, meta: { requiresAuth: true } }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // si la ruta requiere autenticación y el usuario no está autenticado
    // redirigir a la página de inicio de sesión
    next('/login')
  } else {
    // en cualquier otro caso, permitir el acceso a la ruta
    next()
  }
})

function isAuthenticated() {
  // REALIZAR AUTENTICACIÓN
  return false
}

