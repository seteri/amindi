const categoriesModule = {
    namespaced: true,

    state() {
        return {
            showSiteInfo: false
         
        }
    },

    mutations:{
        changeShowInfoValue(state){
            state.showSiteInfo = !state.showSiteInfo 
        }

    },

    getters: {
        showSiteInfo(state){
            return state.showSiteInfo
        }


    }
}

export default categoriesModule