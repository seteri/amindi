const categoriesModule = {
    namespaced: true,

    state() {
        return {
            toggleInfoModal: false,
            toggleUserUpdatePopup: false,
            toggleEmailUpdatePopup: false,
            toggleUserMenu: false,

        }
    },

    mutations:{
        toggleInfoModal(state){
            state.toggleInfoModal = !state.toggleInfoModal
        },
        toggleUpdatePopup(state){
            state.toggleUserUpdatePopup = !state.toggleUserUpdatePopup
        },
        toggleEmailUpdatePopup(state){
            state.toggleEmailUpdatePopup = !state.toggleEmailUpdatePopup
        },
        toggleUserMenu(state){
            state.toggleUserMenu = !state.toggleUserMenu
        }

        


    },

    getters: {
        toggleUserMenu(state){
            return state.toggleUserMenu

        },
        showSiteInfo(state){
            return state.toggleInfoModal
        },
        toggleUserUpdatePopup(state){
            return state.toggleUserUpdatePopup
        },
        toggleEmailUpdatePopup(state){
            return state.toggleEmailUpdatePopup
        }



    }
}

export default categoriesModule