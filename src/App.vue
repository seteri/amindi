<script setup>
  import Head from "./components/vueFiles/Header.vue"
  import Videos from "./components/vueFiles/Videos.vue"
  import LeftSide from "./components/vueFiles/LeftSide.vue"
  import { useStore } from 'vuex';
  const store = useStore()
  const test = () =>{
    console.log()
  }
  
</script>

<template>
  <Head/>
  <div class="ff">
    <div>
      <LeftSide/>
      
    </div>
    <Videos/>
  </div>



 
</template>

<style >
  .ff{
    display: flex;
  }

</style>
