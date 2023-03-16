import axios from "axios"
import store from "../.."

const loginModule = {
    namespaced: true,
    state() {
        return {
            showLogInpopup: false,
            isLoggedIn: null,
            couldNotLogin: false

        }
    },
    getters: {
        token(state){

            return state.isLoggedIn.token
        },
        logInPopup(state){
            return state.showLogInpopup
        },

        isLoggedIn(state){
            return state.isLoggedIn
        },
        couldNotLogin(state){
            return state.couldNotLogin
        }

    },
    mutations: {
        LOG_OUT(state){
            state.isLoggedIn = null

            localStorage.removeItem("name")
            store.commit("switchButtons/toggleUserMenu")
            console.log(localStorage)

        },

        popupOff(state){
            state.showLogInpopup = false
        },

        TOGGLE_POPUP(state){
            state.showLogInpopup = !state.showLogInpopup
            store.commit("registration/popupOff")
        },

        SAVE_INFO(state,status){
            state.isLoggedIn = status
            state.showLogInpopup = false
            console.log(state.loginInfo)
        },

        FAIL_TO_LOGIN(state){
            state.couldNotLogin = true

        }

    },
    actions: {

        login({commit,state},payload){
            axios.post("https://items.magischer.de/api/auth/login",
            {
                email: payload.email,
                password: payload.password
             }
             )
             .then(result => {
                localStorage.setItem("name",JSON.stringify(result.data))
                commit("SAVE_INFO",result.data)
                console.log(state)
            })
             .catch(err => commit("FAIL_TO_LOGIN"))
  
        }

    }
}

export default loginModule