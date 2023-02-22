const subscriptionsModule = {
    namespaced: true,
    
    state(){
        return{
            showMore: false,
            subscribed: [
                {img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVlJSSJ7byww8uoTMo953Uag9yekttTlG8R5KuI6g=s88-c-k-c0x00ffffff-no-rj", name: "Mikheil HD"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVIWXyp1SJuleFT_fNrFG4ABd9Id3h9ZOhzGUqkOg=s88-c-k-c0x00ffffff-no-rj", name: "Avatar"},
                {img: "https://yt3.ggpht.com/6qGB1dbHTJ-UyBdQh7szYRuTKRKGCBzSIKbEB2fJt74TZ880CzFM2n-rqM8Ig9TX2JU6P62PCw=s88-c-k-c0x00ffffff-no-rj", name: "Akaki Gegenava"},
                {img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVlJSSJ7byww8uoTMo953Uag9yekttTlG8R5KuI6g=s88-c-k-c0x00ffffff-no-rj", name: "Mikheil HD"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVIWXyp1SJuleFT_fNrFG4ABd9Id3h9ZOhzGUqkOg=s88-c-k-c0x00ffffff-no-rj", name: "Avatar"},
                {img: "https://yt3.ggpht.com/6qGB1dbHTJ-UyBdQh7szYRuTKRKGCBzSIKbEB2fJt74TZ880CzFM2n-rqM8Ig9TX2JU6P62PCw=s88-c-k-c0x00ffffff-no-rj", name: "Akaki Gegenava"},
                {img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVlJSSJ7byww8uoTMo953Uag9yekttTlG8R5KuI6g=s88-c-k-c0x00ffffff-no-rj", name: "Mikheil HD"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVIWXyp1SJuleFT_fNrFG4ABd9Id3h9ZOhzGUqkOg=s88-c-k-c0x00ffffff-no-rj", name: "Avatar"},
                {img: "https://yt3.ggpht.com/6qGB1dbHTJ-UyBdQh7szYRuTKRKGCBzSIKbEB2fJt74TZ880CzFM2n-rqM8Ig9TX2JU6P62PCw=s88-c-k-c0x00ffffff-no-rj", name: "Akaki Gegenava"},
                {img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVlJSSJ7byww8uoTMo953Uag9yekttTlG8R5KuI6g=s88-c-k-c0x00ffffff-no-rj", name: "Mikheil HD"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVIWXyp1SJuleFT_fNrFG4ABd9Id3h9ZOhzGUqkOg=s88-c-k-c0x00ffffff-no-rj", name: "Avatar"},
                {img: "https://yt3.ggpht.com/6qGB1dbHTJ-UyBdQh7szYRuTKRKGCBzSIKbEB2fJt74TZ880CzFM2n-rqM8Ig9TX2JU6P62PCw=s88-c-k-c0x00ffffff-no-rj", name: "Akaki Gegenava"},
                {img: "https://yt3.ggpht.com/z548l6vZHvT8MkJI8OtTnqULUwXIABAEN_g6EG3WHddPCjR3ENAHnGH-bsF90rW5qeJ4nfNDNQ=s88-c-k-c0x00ffffff-no-rj", name: "Hungryman"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVlJSSJ7byww8uoTMo953Uag9yekttTlG8R5KuI6g=s88-c-k-c0x00ffffff-no-rj", name: "Mikheil HD"},
                {img: "https://yt3.ggpht.com/ytc/AL5GRJVIWXyp1SJuleFT_fNrFG4ABd9Id3h9ZOhzGUqkOg=s88-c-k-c0x00ffffff-no-rj", name: "Avatar"},
                {img: "https://yt3.ggpht.com/6qGB1dbHTJ-UyBdQh7szYRuTKRKGCBzSIKbEB2fJt74TZ880CzFM2n-rqM8Ig9TX2JU6P62PCw=s88-c-k-c0x00ffffff-no-rj", name: "Akaki Gegenava"},


            ]
        }
    },
    getters:{
        subscribedPeople(state){
            return state.subscribed
        },
        showMore(state){
            return state.showMore
        },
        hiddenChannels(state){
            return state.subscribed.length - 5
        }

    }

}

export default subscriptionsModule