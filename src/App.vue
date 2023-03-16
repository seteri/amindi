<script setup>
import { onMounted } from 'vue';
import registrationPopup from "./components/vueFiles/Registration.vue"
import loginPopup from "./components/vueFiles/Login.vue"
import { useStore } from 'vuex';

const store = useStore()
const user = localStorage.getItem("name")
onMounted(() => {
  if(user){
    store.commit("login/SAVE_INFO",JSON.parse(user))
  }
    store.dispatch("cities/fetchData")
})


</script>

<template>
  <div class=" min-h-screen font-Roboto bg-mainBackground bg-no-repeat	bg-cover	 ">
  
    <RouterView />
    <registrationPopup/>
    <loginPopup/>
  </div>
</template>

<style ></style>
