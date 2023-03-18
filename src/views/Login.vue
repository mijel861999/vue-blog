<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";
import { storeToRefs } from "pinia";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

const { login } = userStore;

const loginForm = ref({
  username: null,
  password: null,
});

function startLogin() {
  if (!loginForm.value.username || !loginForm.value.password) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Complete los campos para ingresar",
    });
    console.log("Necesita completar los datos");
    return;
  }

  login(loginForm.value.username, loginForm.value.password);
}
</script>

<template>
  <div class="login-container">
    <div class="form">
      <h1>Iniciar sesión</h1>
      <label for="username">Usuario</label>
      <input type="text" v-model="loginForm.username" required />
      <label for="password">Contraseña</label>
      <input type="password" v-model="loginForm.password" required />
      <input type="submit" value="Ingresar" @click="startLogin" />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.form {
  width: 500px;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.form h1 {
  margin-bottom: 20px;
}

.form label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>
