<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()

const userInfo = computed(() => store.getters["registration/userInfo"])


</script>

<template>
  <div class="flex ">
    <div class="ml-[20%] mt-14 border-r-2">
      <div class="mb-[100px]">
        <p class="font-bold text-[40px]">Security</p>
        <p class="text-[17px]">Manage your password and 2fa </p>
      </div>

      <div >
        <div class="flex items-center mb-7 mr-5 ">

          <div class="bg-slate-300 border-2 flex border-black w-[300px]  mr-5 h-[45px]">
            <input class="bg-transparent font-bold focus:outline-none placeholder-black ml-3 "   placeholder="Old password" type="text">
          </div>
        </div>

        <div class="flex items-center mb-7 mr-5 ">
          <div class="bg-slate-300 border-2 flex border-black w-[300px]  mr-5 h-[45px]">
            <input class="bg-transparent font-bold focus:outline-none placeholder-black ml-3 "   placeholder="New password" type="text">

          </div>
        </div>
        <button class="bg-blue-700 w-[130px] text-white h-[40px]">Save changes</button>


      </div>
    </div>

    <div class="w-[320px] mt-[70px] ml-[10px] ">
      <p class="font-bold text-[40px] text-[20px]">Enable 2fa</p>

    </div>

  </div>
</template>
