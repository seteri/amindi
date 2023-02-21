<script setup>
import { useStore } from 'vuex';
import {computed} from "vue"
const store = useStore()
const videos = computed(() => store.getters.videos)
const imgPerCol = computed(() =>store.getters.imgPerCol)
//e
const toggleSubscription = (video) =>{
    if (video.isSubscribed) {
        const index = store.state.Youtube.subscribed.findIndex(sub => sub.uploader_name == video.uploader);
        store.state.Youtube.subscribed.splice(index, 1);

    } else {
        store.state.Youtube.subscribed.push({ uploader_name: video.uploader, uploader_img: video.uploader_img, isSubscribed: true });
    } 
    video.isSubscribed = !video.isSubscribed;
}
</script>

<template>
    <div class="video-table" :style="{display: 'grid', gridTemplateColumns: store.state.Youtube.imgPerCol}">
        <div v-for="video in videos">
            <img class="video-img" :src="video.img" alt="">
        </div>
    </div>
</template>


<style scoped >
.upload-date{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606060;
    padding-bottom: 3px;
}
.profile-pic{
    margin-top: -70px;
}
.name{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding-bottom: 3px;
}
.uploader{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #606060;
    padding-bottom: 3px;

}
.video-name{
    padding: 8px;
}
.description{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}
.video-table{
    margin-top: 5%;

    column-gap: 15px;
    width: 80%;
    margin-left: 8%;
}
.video-img{
    width: 100%;
    height: 70%;
    border-radius: 15px;
}

</style>
