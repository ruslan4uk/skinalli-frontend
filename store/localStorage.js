export default {
    namespaced: true,

    state() {
        return {
            favorite: []
        }
    },

    getters: {
        favorite(state) {
            return state.favorite
        }
    },

    mutations: {
        SET_FAVORITE(state, payload) {
            state.favorite.push(payload)
        },
        REMOVE_FAVORITE(state, payload) {

            state.favorite = state.favorite.filter(x => x.id !== payload.id)
        }
    },

    actions: {
        setFavorite({ commit, state }, payload) {
            let isFavorite = false
            state.favorite.forEach(el => {
                if(el.id === payload.id) {
                    isFavorite = true
                } 
            });
            isFavorite 
                ? commit('REMOVE_FAVORITE', payload)
                : commit('SET_FAVORITE', payload);
        },
        removeFavorite({ commit }, payload) {
            commit('REMOVE_FAVORITE', payload)
        }
    },

}