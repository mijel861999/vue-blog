<script setup>
import { useUserStore } from "../store/user";
import NavbarVue from "../components/Navbar.vue";


const userStore = useUserStore();

const { logout } = userStore;

</script>

<template>
  <NavbarVue></NavbarVue> 
  <div>Blog protegido</div>
  <button v-on:click="logout">Cerrar sesión</button>
</template>

<style scoped>
  
</style>
