<script setup>
import { useStore } from "vuex";
import { computed } from "vue"
const store = useStore()
const toggle = computed(() => store.getters["cities/toggle"])
const callTogleFunction = () => {
    store.commit("cities/toggle")
}

const citiesList = computed(() => store.getters["cities/cities"])
const isLoaded = computed(() => store.getters["cities/isLoaded"])
const activeCity = computed(() => store.getters["cities/activeCity"])
const api = computed(() => store.getters["cities/api"])

const test = (e) => {
    store.commit("cities/changeCity", e.target.id)
    console.log(e.target.id)
}

</script>

<template>


    <div v-if="isLoaded!=false">
        <button @click="callTogleFunction"
            class="flex justify-center items-center text-white h-[30px] ml-[20%] rounded-[12px] border w-[8%] bg-weather-secondary">აირჩიე
            ქალაქი</button>
        <div v-if="toggle"
            class="ml-[19.99%] flex flex-wrap  absolute p-10 w-[40%] rounded-lg  text-white bg-weather-secondary">
            <div class="flex flex-wrap" v-for="city in citiesList" >
                <p :id="city.id" @click="test" class="cursor-pointer ml-[30px] mb-7 font-bold text-[20px]">{{ city.name }}</p>
            </div>
        </div>
        <div v-if="isLoaded!=false" class=" w-[300px] h-[780px] ml-8 bg-weather-secondary">
            <h1 class="text-white font-bold text-[35px] ml-6">{{ api[activeCity].location.name }}</h1>
            <div class="flex items-center">
                <img class="ml-[10%] w-[100px] " :src=api[activeCity].current.condition.icon>
                <p  class="text-white text-[40px] ">{{ api[activeCity].current.temp_c }} <span class="text-[20px]">c</span></p>
            </div>
            <div class="w-[93%] ml-2 h-[1px] bg-white">
            </div>

            <div class="flex items-center">
                <img class="w-[80px] animate-spin mt-5 ml-5"
                    src="https://o.remove.bg/downloads/62ac5681-020d-4fd5-b708-50d6472ec43e/354-3542795_wind-turbine-hd-png-download-removebg-preview.png"
                    >
                <div>
                    <p class="ml-8 text-lg  text-white">ქარი და წნევა:</p>
                    <div class="ml-12">
                        <p class="text-white">{{ api[activeCity].current.wind_kph }} kph</p>
                        <p class="text-white">{{ api[activeCity].current.pressure_in }} in</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style></style>