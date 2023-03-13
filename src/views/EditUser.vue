<script setup props="message">

import { ref } from 'vue';
import router from '../routes';

import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
const route = useRoute()
const store = useStore()

const newUser = ref("")

const editUser = () =>{
    store.dispatch("categories/editUser", {newName: newUser.value,id: route.params.id})
}

</script>

<template>
    <div class="fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div class="p-4 bg-white flex items-center flex-col self-start mt-32 max-w-screen-md">
            <input v-model=newUser class="text-center focus:outline-none" placeholder="new username">

            <div>
               
                <RouterLink to="/admin"> <button @click="editUser"
                    class=" mt-8 text-slate-500 duration-300 mr-5 hover:bg-orange-500 hover:text-white  bg-weather-primary py-2 px-6">Save
                    changes</button></RouterLink>



                <RouterLink to="/admin">
                    <button class=" mt-8 text-black bg-slate-100 py-2 px-6">Close</button>
                </RouterLink>

            </div>

        </div>
    </div>
</template>