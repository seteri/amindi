<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';
const store = useStore()
const email = ref()
const password = ref()
const showDashboard = computed(() => store.getters["registration/showDashboard"])
const showLoginPopup = computed(() => store.getters["login/logInPopup"])
const loginFailed = computed(() => store.getters["login/couldNotLogin"])
const login = () =>{
    store.dispatch("login/login",{
        email: email.value,
        password: password.value
    })
}

const toggleDashboard = () =>{
  store.commit("registration/showDashboard")
}


</script>

<template>
        <div v-if="showLoginPopup"  class="flex items-center absolute top-20 right-[10%] justify-center w-[20%] h-[40%] bg-gray-100">
            <div>
                <h1 class="text-center text-lg font-bold text-gray-500">Log in</h1>
                <div class="space-y-4 mt-6">
                    <div class="w-full">
                        <input v-model="email" type="text" placeholder="email" class="px-4 py-2 bg-gray-50" />

                    </div>
                    <div  class="w-full">
                        <input v-model="password"   type="password" placeholder="password" class="px-4 py-2 bg-gray-50" />
                        <p v-if="loginFailed" class="text-red-500 font-bold text-[15px]">Email or password is incorrect</p>

                    </div>
                </div>
                <button @click="login" class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Log in</button>
            </div>
        </div>
        <div v-if="showDashboard" class=" w-[18%] bg-white absolute top-20 flex justify-center items-center  right-24 h-48" >
            <router-link @click="toggleDashboard" to="/dashboard/profile"><p class="text-[20px] font-bold cursor-pointer hover:opacity-[0.5]">Go to user dashboard </p></router-link>
        </div>
</template>