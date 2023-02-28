import axios from "axios"

const apiModule = {
    namespaced: true,

    state() {
        return {
            api_url: "https://api.weatherapi.com/v1/current.json?",
            api_key: import.meta.env.VITE_API_URL,
            api: null,
         
        }
    },

    mutations:{

        SAVE_DATA(state,api){
            state.api = api
            console.log(state.api)
        }
   
    },

    getters: {
        apiInfo(state){
            return state.api
        }

    },

    actions:{

        fetchData({commit,state},payload){
            axios.get(state.api_url+state.api_key+`=${payload}`)

            .then(result => commit("SAVE_DATA",result.data))
            console.log(payload)
        }

    }
}

export default apiModule