<script setup>
import { useStore } from "vuex";
import { computed } from "vue"
const isLoggedIn = computed(() => store.getters["login/isLoggedIn"])
const userMenu = computed(() => store.getters["switchButtons/toggleUserMenu"])
const toggleModal = () => {
  store.commit("switchButtons/toggleInfoModal")
}
const store = useStore()
const showRegistrationPopup = () => {
  store.commit("registration/showRegistrationPopup")
}
const toggleUserMenu = () =>{
  store.commit("switchButtons/toggleUserMenu")

}
const logOut = () =>{
  store.commit("login/LOG_OUT")
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

        <div @click="toggleUserMenu" v-if="isLoggedIn"
        class="flex bg-weather-secondary cursor-pointer  hover:bg-slate-700 items-center justify-center w-[40px] rounded-[50%] h-[40px] mt-[-5px]">
        {{isLoggedIn?.user.name[0] }}</div>
    </div>
  </nav>

</header>
<div v-if="userMenu" class="bg-white flex items-center justify-center flex-col absolute right-[10%] w-[10%] rounded-xl h-[200px]">
    <p class="font-bold hover:text-slate-500 cursor-pointer py-2">Profile (soon)</p>
    <p class="font-bold hover:text-slate-500 cursor-pointer py-2">Settings (soon)</p>
    <router-link to="/admin"><p class="font-bold hover:text-slate-500 cursor-pointer py-2">Admin panel</p></router-link>
    <div class="flex border-t-2 items-center justify-center h-[30px] w-[100%]">
      <button @click="logOut" class="w-[50%] h-[100%] text-white font-bold rounded-xl mt-5 bg-blue-600">LOG OUT</button>

    </div>
    
</div>


</template>

<style>
</style>