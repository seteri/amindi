const usersModule = {
    namespaced: true,
    state() {
        return{
            usersData:[
                {
                    id: 1,
                    name: "",
                    email: "",
                    password: ""
                }

            ],
            authenticated: null
        }
    },

    mutations:{
        authentication(state,payload){
            let user = state.usersData.filter(e => e.email === payload.email)
            if(user.password === payload.password){
                state.authenticated = user
            }
        },
        newUser(state,payload){
            state.usersData.push(payload)
        }
    },
    getters:{
        authenticated(state){
            state.authenticated
        }

    },
    actions:{

        registerUser({commit},payload){
            commit("newUser",payload)
            commit("authentication",payload)
        }

    }    
}