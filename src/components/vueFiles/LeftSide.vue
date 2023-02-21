<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()
const active = computed(() => store.getters.menuOn)
const icons = computed(() =>store.getters.icons)
console.log()


</script>

<template>
    <div class="menu" v-if="active">
        <div class="first-part">
            <div v-for="a in icons" class="menu-component">
                <img class="icon" :src="a.loc">
                <p class="comp-name">{{ a.name }}</p>
            </div>
        </div>
        <div class="line"></div>
        <p style="font-family: arial;margin-left: 20px;margin-top: 10px;margin-bottom: 10px;">Subscriptions</p>
        <div v-for="profile in store.state.Youtube.subscribed" class="subscribed-profile">
            <img class="subscribed-img" :src="profile.uploader_img" alt="">
            <p>{{ profile.uploader_name }}</p>
            
        </div>
    </div>

</template>

<style scoped>
.subscribed-profile{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.subscribed-img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding-right: 10px;
    padding-left: 10px;

    
}
  .line{
    width: 100%;
    background-color: rgba(128, 128, 128, 0.37);
    height: 1px;
    margin-left: 10px;
  }
.comp-name{
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 12px;
}
.menu-component{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
}
.icon{
    padding-top: 10px;
    width: 30px;
    height: 30px;
    padding-right: 10px;

}
.menu{
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr;
    width: 13%;
}
.first-part{
    display: grid;
    grid-template-columns: 1fr;
    width: 10%;

}


</style>
