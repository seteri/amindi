import axios from "axios"
import store from '@/store';

const categoriesModule = {
    namespaced: true,
    state() {
        return {
            showDeletePopup : false,
            usersAPI: null,
        }
    },
    getters: {
        showDeletePopup(state){
            return state.showDeletePopup

        },
        usersAPI(state) {
            return state.usersAPI
        }


    },
    mutations: {

        TOGGLE_DELETE_POPUP(state){
            state.showDeletePopup = !state.showDeletePopup

        },

        SAVE_DATA(state, data) {
            state.usersAPI = data
            console.log(state.usersAPI)
        }


    },
    actions: {

        test() {

            console.log("hey")

        },

        callApi({ commit,state }) {
            axios.get("/categories")
                .then(result => {
                    commit("SAVE_DATA", result.data)
                    console.log(result)
                })
               
        },

        deleteUser({state,commit }, id) {
            axios.delete(`/categories/${id}`,
                {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${store.getters['login/token']}`
                    }
                }

            )
            .then(commit("TOGGLE_DELETE_POPUP"))
            .then(state.usersAPI.data = state.usersAPI.data.filter(user => user.id !== id ))


    
        },


       async editUser({state,dispatch},newUser){

           await axios.put(`/categories/${newUser.id}`,
            {
                "name": newUser.newName,
                "type": "news",
            },
            {
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Bearer ${store.getters['login/token']}`
                }
            }

        )
        .then()
        

        }



    }
}

export default categoriesModule