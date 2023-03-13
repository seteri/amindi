import axios from "axios"
import store from '@/store';

const categoriesModule = {
    namespaced: true,
    state() {
        return {

            usersAPI: null,
        }
    },
    getters: {

        usersAPI(state) {
            return state.usersAPI
        }


    },
    mutations: {

        SAVE_DATA(state, data) {
            state.usersAPI = data
            console.log(state.usersAPI)
        }


    },
    actions: {

        test() {

            console.log("hey")

        },

        callApi({ commit }) {
            axios.get(`http://items.magischer.de/api/categories`)
                .then(result => {
                    commit("SAVE_DATA", result.data)
                    console.log(result)
                })
               
        },

        deleteUser({state }, id) {
            axios.delete(`https://items.magischer.de/api/categories/${id}`,
                {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${store.getters['login/token']}`
                    }
                }

            )
            .then(state.usersAPI.data = state.usersAPI.data.filter(user => user.id !== id ))

    
        },

        addUser({ state }, name) {
            axios.post(`https://items.magischer.de/api/categories`,
                {
                    "name": name,
                    "type": "news",
                },
                {
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${store.getters['login/token']}`
                    }
                }

            )
                .then(res => console.log(res))
        },

        editUser({state},newUser){

            axios.put(`https://items.magischer.de/api/categories/${newUser.id}`,
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