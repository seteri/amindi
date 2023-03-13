<script setup>
import { useStore } from "vuex";
import { computed } from "vue"
import navMenu from "../components/vueFiles/navigation.vue"
const store = useStore()
const toggle = computed(() => store.getters["cities/toggle"])
const finalStatus = computed(() => store.getters["registration/finalStatus"])
const callTogleFunction = () => {
    store.commit("cities/toggle")
}

const toggleModal = () => {
    store.commit("switchButtons/toggleInfoModal")
}
const succesfullyRegistered = computed(() => store.getters["switchButtons/showSiteInfo"])
const activeCity = computed(() => store.getters["cities/activeCity"])
const api = computed(() => store.getters["cities/api"])



const test = (e) => {
    store.commit("cities/changeCity", e)
    console.log(e)
}

</script>

<template>
    <navMenu/>
    <div>
        <button @click="callTogleFunction"
            class="flex justify-center items-center text-white h-[30px] ml-[20%] rounded-[12px] border w-[8%] bg-weather-secondary">აირჩიე
            ქალაქი</button>
        <div v-if="toggle" class="ml-[19.99%] flex flex-wrap  absolute p-10 w-[40%] rounded-lg  text-white bg-slate-600">
            <div class="flex flex-wrap" v-for="city, index in api">
                <p @click="() => test(index)" class="cursor-pointer ml-[30px] mb-7  font-bold text-[30px]">{{
                    city.data.location.name }}</p>
            </div>
        </div>
        <div class="flex">
            <div class=" w-[17%] h-[780px] rounde ml-8 bg-weather-secondary">
                <h1 class="text-white font-bold text-[40px] ml-6">{{ api[activeCity]?.data.location.name }}</h1>
                <div class="flex items-center">
                    <img class="ml-[10%] w-[100px] " :src=api[activeCity]?.data.current.condition.icon>
                    <p class="text-white text-[80px] ">{{ api[activeCity]?.data.current.temp_c }} <span
                            class="text-[20px]">c</span></p>
                </div>
                <div class="w-[93%] ml-2 h-[1px] bg-white">
                </div>

                <div class="flex items-center">
                    <img class="w-[120px] animate-spin mt-5 ml-5"
                        src="../assets/png-transparent-attic-fan-computer-icons-blade-ventilation-fan-technic-flower-поставка-removebg-preview.png">
                    <div>
                        <p class="ml-8 text-lg text-[25px] font-bold  text-white">ქარი და წნევა:</p>
                        <div class="ml-12">
                            <p class="text-white text-[30px] font-bold">{{ api[activeCity]?.data.current.wind_kph }} kph</p>
                            <p class="text-white text-[30px] font-bold">{{ api[activeCity]?.data.current.pressure_in }} in
                            </p>
                        </div>

                    </div>

                </div>


            </div>


            <div class="w-[70%] ml-[17px] mt-4 rounde flex justify-center items-center text-[40px] bg-weather-secondary">
                <p>სარეკლამო ადგილი</p>
            </div>

            <div v-if="succesfullyRegistered" class="fixed w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
                <div class="p-4 bg-white self-start mt-32 max-w-screen-md">
                    <p v-if="finalStatus">You have been registered succesfully</p>
                    <p v-else-if="finalStatus!=true">You have entered something wrong, try again</p>
                    
                    <button @click="toggleModal" class="text-white mt-8 bg-weather-primary py-2 px-6">Close</button>
                </div>
            </div>

        </div>

    </div>
</template>

<style></style>