import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    username: 'miguel'
  })

  function login() {
    console.log("Login")
    axios.get('http://localhost:3000/api/v1/categories')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }

  function logout() {
    console.log("Logout")
  }

  return {user, login, logout}
})
