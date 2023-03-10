import axios from "axios"
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

        TOGGLE_POPUP(state){
            state.showLogInpopup = !state.showLogInpopup
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

        login({commit},payload){
            axios.post("https://items.magischer.de/api/auth/login",
            {
                email: payload.email,
                password: payload.password
             }
             )
             .then(result => commit("SAVE_INFO",result.data.status))
             .catch(err => commit("FAIL_TO_LOGIN"))
  
        }
        

        

    }
}

export default loginModule