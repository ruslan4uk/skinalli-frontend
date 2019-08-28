export default {

    actions: {
        async nuxtServerInit({ dispatch }) {
            await dispatch('init/init')
        }
    }

}