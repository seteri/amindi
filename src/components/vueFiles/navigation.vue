<script setup>
import BaseModal from "./BaseModal.vue"
import { useStore } from "vuex";
import {computed} from "vue"
const showInfoMenu = computed(() => store.getters["switchButtons/showSiteInfo"])
const changeShowInfoValue = () =>{
  store.commit("switchButtons/changeShowInfoValue")
}
const store = useStore()

</script>

<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row item-center gap-4 text-white py-6">

      <routerLink to="/home">
        <div class="flex items-center gap-3">
        <i class="fa-sharp fa-solid fa-snowflake text-2xl"></i>
        <p class="text-2xl font-bold ">Amindi</p>
      </div>
      </routerLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i @click="changeShowInfoValue" class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-300"> </i>
        <i class="fa-solid fa-plus text-xl hover:text-weather-secondary cursor-pointer duration-300"></i>
      </div>

      <BaseModal v-if="showInfoMenu">
      <h1 class="text-black">ამინდის პროგნოზის საიტი</h1>
      </BaseModal>

    </nav>
  </header>

</template>