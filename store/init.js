export default {
    namespaced: true,

    state() {
        return {
            category: [],

            loader: false
        }
    },

    getters: {
        category(state) {
            return state.category;
        },
        loader(state) {
            return state.loader;
        }
    },

    mutations: {
        SET_CATEGORY(state, payload) {
            state.category = payload
        },

        SET_LOADER(state, payload) {
            state.loader = payload
        }
    },

    actions: {
        async init ({ commit }) {
            await this.$axios.get('/data/init').then(res => {
                commit('SET_CATEGORY', res.data.category)  
            })
        },

        setLoader({ commit }, payload) {
            commit('SET_LOADER', payload);
        },

    },

}