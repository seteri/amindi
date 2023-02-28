<script setup>
import { onMounted } from 'vue';

import { useStore } from 'vuex';
import navMenu from "./components/vueFiles/navigation.vue"
const store = useStore()
onMounted(() => {
    store.dispatch("api/fetchData","tbilisi")
})


</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <navMenu />
    <RouterView />
  </div>
</template>

<style ></style>
