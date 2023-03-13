import axios from "axios"
import store from '@/store';

const categoriesModule = {
    namespaced: true,
    state() {
        return {

            usersAPI: null,
            categoriesApi: import.meta.env.VITE_DATABASE_URL
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

        callApi({ commit,state }) {
            axios.get(state.categoriesApi)
                .then(result => {
                    commit("SAVE_DATA", result.data)
                    console.log(result)
                })
               
        },

        deleteUser({state }, id) {
            axios.delete(`${state.categoriesApi}/${id}`,
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
            axios.post(state.categoriesApi,
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

            axios.put(`${state.categoriesApi}/${id}`,
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