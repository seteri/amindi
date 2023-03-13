<script setup>
import { useStore } from "vuex";
import { computed } from "vue"
const isLoggedIn = computed(() => store.getters["login/isLoggedIn"])

const toggleModal = () => {
  store.commit("switchButtons/toggleInfoModal")
}

const store = useStore()
const showRegistrationPopup = () => {
  store.commit("registration/showRegistrationPopup")
}


const showLogInPopup = () => {
  store.commit("login/TOGGLE_POPUP")
}
</script>

<template>
  <header class=" shadow-lg">
    <nav class="container flex flex-col sm:flex-row item-center gap-4 text-white py-6">

      <div class="flex items-center gap-3">
        <i class="fa-sharp fa-solid fa-snowflake text-2xl"></i>
        <router-link to="/">
          <p class="text-2xl font-bold ">Amindi</p>
        </router-link>
      </div>
      <div class="flex gap-3 flex-1 justify-end">
        <i @click="toggleModal"
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-300"> </i>
        <i class="fa-solid fa-plus text-xl hover:text-weather-secondary cursor-pointer duration-300"></i>
        <p v-if="isLoggedIn?.status != true" @click="showRegistrationPopup"
          class=" font-bold text-xl hover:text-weather-secondary cursor-pointer duration-300">SIGN UP</p>
        <p v-if="isLoggedIn?.status != true" @click="showLogInPopup"
          class=" font-bold text-xl hover:text-weather-secondary rounded-xl px-2  bg-teal-500 cursor-pointer duration-300">
          LOG IN</p>
        <router-link v-if="isLoggedIn" to="/admin">
          <p 
            class=" font-bold text-xl hover:text-weather-secondary rounded-xl px-2  bg-teal-500 cursor-pointer duration-300">
            Admin panel</p>
        </router-link>
        <div v-if="isLoggedIn"
        class="flex bg-weather-secondary cursor-pointer  hover:bg-slate-700 items-center justify-center w-[40px] rounded-[50%] h-[40px] mt-[-5px]">
        {{isLoggedIn?.user.name[0] }}</div>
    </div>



  </nav>
</header></template>