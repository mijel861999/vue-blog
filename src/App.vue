<script setup>
import { useUserStore } from './store/user.js'
import { storeToRefs } from 'pinia'
import HelloWorld from './components/HelloWorld.vue'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

console.log(user.value.username)

</script>
<template>
	<RouterView />
</template>

<style scoped>

</style>
