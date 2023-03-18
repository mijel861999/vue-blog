import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import  VueCookies  from 'vue-cookies'
import Swal from "sweetalert2";


export const useUserStore = defineStore('user', () => {
  const user = ref({
    username: null
  })

  async function login(username, password) {    
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login', {
        username,
        password
      })
      const data = response.data

      if (data.success) {
        console.log(data.data)
        user.value.username = data.data.username
        VueCookies.set('token-session', JSON.stringify(data.data), '1h') 
        window.location.href= "http://localhost:5173/"
      } else {
         Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: data.message,
        });
      }
    } catch(error) {
      console.error(error)
    }
  }

  function logout() {
    console.log("Logout")
    VueCookies.remove('token-session')
    window.location.href= "http://localhost:5173/login"
  }

  return {user, login, logout}
})
