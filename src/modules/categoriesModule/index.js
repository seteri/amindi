const categoriesModule = {
    namespaced: true,

    state() {
        return {
            activeCategory: "sports",

            categories:[
                {category: "sports"},
                {category: "gaming"},
                {category: "movies"},
                {category: "horror"},
                {category: "anime"},
                {category: "marvel"},
                {category: "dc"},
                {category: "manga"},
                {category: "music"},


            ]

        }
    },

    mutations:{
        selectCategory(state,payload){
            return state.activeCategory = payload

        }
    },

    getters: {
        categories(state){
            return state.categories
        },
        activeCategory(state){
            return state.activeCategory
        }

    }
}

export default categoriesModule