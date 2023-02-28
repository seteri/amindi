import axios from "axios"

const apiModule = {
    namespaced: true,

    state() {
        return {
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

        fetchData({commit},payload){
            axios.get(`https://api.weatherapi.com/v1/current.json?key=d4c780a430794d8d882195348232602&q=${payload}`)

            .then(result => commit("SAVE_DATA",result.data))
            console.log(payload)
        }

    }
}

export default apiModule