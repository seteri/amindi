<script setup>
import { useStore } from "vuex";
const store = useStore()
const changeShowInfoValue = () => {
    store.commit("switchButtons/changeShowInfoValue")
}

</script>

<template >
    <Teleport to="body">
        <div class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
        <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
            <slot />
            <button @click="changeShowInfoValue" class="text-white mt-8 bg-weather-primary py-2 px-6">Close</button>
        </div>
    </div>
    </Teleport>
</template>

<style></style>