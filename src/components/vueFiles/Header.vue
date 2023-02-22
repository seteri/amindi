<script setup>
import { useStore } from 'vuex';
const store = useStore()
const menuOn = () =>{
  store.state.menu.menuOn = !store.state.menu.menuOn
}

</script>

<template>
  <div class="head">
    <div class="first-part">
      <img @click="menuOn" class="hamburger" src="../../assets/icons/Hamburger_icon.svg.png" alt="">
      <img class="youtube-logo" src="../../assets/icons/8gzcr6RpGStvZFA2qRt4v6-removebg-preview.png" alt="">
    </div>
    <div class="middle-part">
      <input class="search-input" placeholder="Search">
      <div class="search-button">
        <img class="search-button-logo" src="../../assets/icons/3031293.png" alt="">
      </div>
    </div>
    <div class="third-part">
      <img class="bell-icon" src="../../assets/icons/free-bell-icon-860-thumb.png" alt="">
      <img class="profile-pic" src="../../assets/icons/channels4_profile.jpg" alt="">
    </div>
   
  </div>

</template>

<style>
.third-part{
  margin-left: 33%;
  display: flex;
  align-items: center;
}
.bell-icon{
  
  width: 23px;
  height: 23px;
  margin-right: 20px;
}

.hamburger{
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.youtube-logo{
  width: 120px;
  height: 70px;
  margin-left: 20px;
}
.head{
  display: flex;
  align-items: center;
  position: fixed;
  background-color: white;
  width: 100%;
}
.first-part{
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.middle-part{
  margin-left: 25% ;
  width: 500px;
  display: flex;
}
.search-input{
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.308);
  padding-left: 20px;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 15px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
}
.search-button-logo{
  width: 20px;

}
.search-button{
  background-color: rgba(128, 128, 128, 0.068);
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.308);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
}
.search-button:hover{
  border-color: rgba(0, 0, 0, 0.658);
}

</style>
