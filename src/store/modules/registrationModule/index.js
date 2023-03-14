import axios from "axios"
import store from "../.."

const registrationModule = {
    namespaced: true,

    state() {
        return {

            usernameIsValid: null,
            passwordIsValid: null,
            finalStatus: null,

            showRegistrationPopup: false,
            userInfo: [

            ]
          
        }
    },

    mutations:{

        popupOff(state){
            state.showRegistrationPopup = false
        },

        checkName(state,length){
            if(length<6){
                state.usernameIsValid = false
            }

            else{
                state.usernameIsValid = true
            }
        },


  
        updateUserName(state,newUsername){
            state.userInfo[0].username=newUsername
            console.log(state.userInfo)
        },
        updateEmail(state,newEmail){
            state.userInfo[0].email=newEmail
            console.log(state.userInfo)
        },
        showRegistrationPopup(state){
            state.showRegistrationPopup = !state.showRegistrationPopup
            store.commit("login/popupOff")
        },


        GET_STATUS(state,status){
            state.finalStatus = status
            state.showRegistrationPopup = !state.showRegistrationPopup
        },
  

    },

    getters: {
        usernameIsValid(state){
            return state.usernameIsValid
        },

        finalStatus(state){
            return state.finalStatus
        },

      

        passwordIsValid(state){
            return state.usernameIsValid
        },

        userInfo(state){
            return state.userInfo
        },
        showRegistrationPopup(state){
            return state.showRegistrationPopup
        },
        isRegistered(state){
            return state.isRegistered
        },
    },

    actions:{
        registerUser({commit},userInfo){
            if(userInfo.sigrdze>5){
                axios.post("https://items.magischer.de/api/auth/register",{
                    name: userInfo.username,
                    email: userInfo.email,
                    password: userInfo.password
                })
                .then(result => commit("GET_STATUS",result.data.status))
                
                .catch(err => console.log(err))
            }

        },
        

    }
}

export default registrationModule