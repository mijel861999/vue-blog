<script setup>
import { useUserStore } from "../store/user";
import NavbarVue from "../components/Navbar.vue";
import { onMounted } from 'vue'
import CategoriesContainerVue from "../components/CategoriesContainer.vue";

const userStore = useUserStore();


const { logout } = userStore;

</script>

<template>
  <NavbarVue></NavbarVue> 
  <section>  
    <div>Search</div>
    <CategoriesContainerVue></CategoriesContainerVue>
  </section>
  <button v-on:click="logout">Cerrar sesión</button>
</template>

<style scoped>
  
</style>
