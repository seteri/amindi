<script setup>
import { onMounted } from 'vue';

import { useStore } from 'vuex';
import navMenu from "./components/vueFiles/navigation.vue"
const store = useStore()
onMounted(() => {
    store.dispatch("cities/fetchData")
})


</script>

<template>
  <div class=" min-h-screen font-Roboto bg-weather-primary">
    <navMenu />
    <RouterView />
  </div>
</template>

<style ></style>
