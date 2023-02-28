<script setup>
import { ref } from 'vue';
import { useStore } from "vuex";
import { computed } from "vue"
import { onMounted } from 'vue';
const store = useStore()
const weatherInfo = computed(() => store.getters["api/apiInfo"])
const searchedCity = ref("london")
const fetchData = ()=>{
    store.dispatch("api/fetchData",searchedCity.value)
}
</script>

<template>
    <div class=" flex justify-center">
        <input v-model="searchedCity"
            class="bg-transparent py-6 pl-14 focus:border-weather-secondary  focus:outline-none focus:shadow-[0px_1px_0_0_#004E71] "
            placeholder="მოძებნე ქალაქი">
        <button @click="fetchData">ძებნა</button>
    </div>
    <div v-if="weatherInfo!=null" class="w-[80%] ml-[11%]  w-95 h-[70vh] bg-slate-700 flex pt-5  rounded-xl">
        <div class="flex justify-center ml-[39%]">
            <div class="flex ">
                <h1 class="text-white font-bold text-[20px]">{{ weatherInfo.location.country }}/{{
                    weatherInfo.location.name }}</h1>
                                    

            </div>
            
            <h1 class="text-white font-bold text-[60px] mt-10 ml-[-53%]">{{ weatherInfo.current.temp_c }} <span
                    class="text-[20px]">c</span></h1>
        </div>

        <div class="flex mt-[10%] ml-[-12%]">
            <div class="mt-[20%] ml-[-50%]">
                <h1 class="text-white text-[20px] ">ქარის სიჩქარე</h1>
                <h1 class="text-white font-bold ml-10 mt-3">{{ weatherInfo.current.wind_kph }} kph</h1>
            </div>

            <div class="mt-[20%] ml-[20%]">
                <h1 class="text-white text-[20px] ">დაბერვის სიძლიერე</h1>
                <h1 class="text-white font-bold ml-20 mt-3">{{ weatherInfo.current.gust_kph }} kph</h1>
            </div>

            <div class="mt-[20%] ml-[15%]">
                <h1 class="text-white text-[20px] ">ბოლოს განახლდა</h1>
                <h1 class="text-white font-bold ml-5 mt-3">{{ weatherInfo.current.last_updated }}</h1>
            </div>
        </div>

    </div>
</template>

<style>
img {
    width: 20px;
}
</style>