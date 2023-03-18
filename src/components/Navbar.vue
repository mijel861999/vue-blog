<script setup>
</script>

<template>
  <nav>
    <div class="logo-container">
      <img src="logo.png" alt="Logo" />
      <h2>Mi sitio</h2>
    </div>
    <div class="buttons-container">
      <button class="home-button">Home</button>
      <button class="portafolio-button">Portafolio</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3f51b5;
  color: "#fff";
  padding: 10px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container img {
  height: 40px;
  margin-right: 10px;
}

.logo-container h2 {
  margin: 0;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.buttons-container .home-button {
  background-color: transparent;
  border: none;
  color: #fff;
  margin-right: 20px;
}

.buttons-container .portafolio-button {
  background-color: transparent;
  border: none;
  color: #fff;
}
</style>
