<script setup>
import { useCategoryStore } from "../store/categories"; 
import { storeToRefs } from "pinia";
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
const { getCategories } = categoryStore
const { categories } = storeToRefs(categoryStore)

onMounted(() => {
  getCategories()
})

</script>

<template>
  <div>
    Categories
    <p v-for="category in categories">
      {{ category.category }}
    </p>
  </div>
</template>

<style scoped>
  
</style>
