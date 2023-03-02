<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const userInfo = computed(() => store.getters["registration/userInfo"])

const isEditable = ref(false)
const inputData = {
    username: ref(userInfo.value[0]?.username || ''),
    password: ref(userInfo.value[0]?.password || ''),
    email: ref(userInfo.value[0]?.email || '')
}

function toggleEditable() {
    isEditable.value = !isEditable.value
}

function saveChanges() {
    store.dispatch('registration/updateUserInfo', {
        username: inputData.username.value,
        password: inputData.password.value,
        email: inputData.email.value
    })
    toggleEditable()
}
</script>

<template>
    <div class="flex bg-white w-[100vw] h-[91.5999999vh] ">
        <div class="w-[13%] pl-9 pt-9 bg-slate-600">
            <p class="font-bold mb-11 text-white text-[30px] cursor-pointer hover:text-[40px] ">Profile</p>
        </div>
        <div class="flex">
            <div class="flex items-center">
                <p v-if="!isEditable" class="p-9 font-bold text-[30px]">Username: {{ userInfo[0]?.username }}</p>
                <input v-else class="p-9 font-bold text-[30px]" v-model="inputData.username" />
            </div>
            <div class="flex items-center">
                <p v-if="!isEditable" class="p-9 font-bold text-[30px]">Password: {{ userInfo[0]?.password }}</p>
                <input v-else class="p-9 font-bold text-[30px]" v-model="inputData.password" />
            </div>
            <div class="flex items-center">
                <p v-if="!isEditable" class="p-9 font-bold text-[30px]">Email: {{ userInfo[0]?.email }}</p>
                <input v-else class="p-9 font-bold text-[30px]" v-model="inputData.email" />
            </div>
            <button @click="toggleEditable">{{ isEditable ? 'Cancel' : 'Edit' }}</button>
            <button v-if="isEditable" class="ml-8" @click="saveChanges">Save</button>
        </div>
    </div>
</template>
