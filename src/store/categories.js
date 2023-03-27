import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import Swal from "sweetalert2";

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])

  async function getCategories() {    
    try {
      const response = await axios.get('http://localhost:3000/api/v1/categories')
      const data = response.data

      if (data.success) {
        console.log(data.data)
        categories.value = data.data
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

  return { categories, getCategories }
})
