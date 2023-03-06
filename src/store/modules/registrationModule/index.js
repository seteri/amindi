const registrationModule = {
    namespaced: true,

    state() {
        return {
            registrationAvailability:[
                {username: null},
                {email: null},
                {password: null}
            ],
            showRegistrationPopup: false,
            isRegistered: false,
            showDashboard:false,
            userInfo: [

            ]
          
        }
    },

    mutations:{
        registerUser(state,userInfo){
            state.userInfo.push(userInfo)
            state.isRegistered = !state.isRegistered
            state.showRegistrationPopup = !state.showRegistrationPopup
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
        },
        showDashboard(state){
            state.showDashboard = !state.showDashboard
        }
  

    },

    getters: {
        registrationAvailability(state){
            return state.registrationAvailability
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
        showDashboard(state){
            return state.showDashboard
        }

    },

    actions:{
        registerUser({commit},userInfo){
            commit("registerUser",userInfo) 
        },
        updateUsername({commit},newUsername){
            commit("updateUserName",newUsername)
        },
        updateEmail({commit},newEmail){
            commit("updateEmail",newEmail)
        }
    }
}

export default registrationModule