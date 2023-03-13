<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import navigation from '../components/vueFiles/navigation.vue';
import router from '../routes';
const store = useStore()
const isLoggedIn = computed(() => store.getters["login/isLoggedIn"])

const usersAPI = computed(() => store.getters["categories/usersAPI"])


onMounted(() => {
    store.dispatch("categories/callApi")
})



const deleteUser = (id) => {
    store.dispatch("categories/deleteUser", id)

}

const editPanel = (id) =>{
    router.push({name:"editPop", params:{id}})
}

const name = ref("")
</script>

<template>

    <div v-if="isLoggedIn?.status != true">
        <navigation/>
        <p class="text-red-600 text-[30px]">Log in to use admin panel</p>
    </div>

    
    <div v-else-if="isLoggedIn?.status" class=" w-[100vw] h-[100vh] bg-slate-500">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            user id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            username
                        </th>
                        <th scope="col" class="px-6 py-3">
                            type
                        </th>

                    </tr>
                </thead>

                <tbody>


                    <tr v-for="user in usersAPI?.data" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.id }}
                        </th>
                        <td class="px-6 py-4 cursor-pointer hover:text-black">
                            {{ user.name }} <i @click="() =>editPanel(user.id)" class="fa-regular fa-pen-to-square"></i>
                        </td>

                        <td class="px-6 py-4 cursor-pointer">
                            {{ user.type }} <i @click="() => deleteUser(user.id)"
                                class="fa-solid fa-trash hover:text-red-600 ml-10"></i>
                        </td>
                    </tr>


                </tbody>
            </table>
            <RouterView />
        </div>


    </div>
</template>

<style>
td {
    margin-right: 10px;
}
</style>
