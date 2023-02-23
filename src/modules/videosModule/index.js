
const videosModule = {
    namespaced: true,

    state(){
        return{        
            subscribed: [],
            videos: [
                {category:"gaming", name: "gaming name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg", uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"gaming", name: "gaming name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"anime", name: "anime name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"dc", name: "dc name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"marvel", name: "marvel name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"manga", name: "manga name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"horror", name: "horror name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"music", name: "music name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"sports", name: "sports name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
                {category:"movies", name: "movies name", date: "2 days ago", uploader: "papunaHD", img: "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",uploader_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlmp7PiMFWsMlv1-mshHFmPBIDgiypF5RjlA&usqp=CAU"},
            
         
            ]
        
        }
    },

    getters:{
        videos(state){
            return state.videos
        },
    }
}

export default videosModule