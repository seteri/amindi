const registrationModule = {
    namespaced: true,

    state() {
        return {
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
        updateUser(state,userInfo){
            state.userInfo=userInfo
        },
        showRegistrationPopup(state){
            state.showRegistrationPopup = !state.showRegistrationPopup
        },
        showDashboard(state){
            state.showDashboard = !state.showDashboard
        }
  

    },

    getters: {
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
        updateUserInfo({commit},newInfo){
            commit("updateUser",newInfo)
        }
    }
}

export default registrationModule