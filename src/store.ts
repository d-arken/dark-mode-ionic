import { createStore } from 'vuex'

const state = {
    darkMode: null
}

const mutations = {
    enableDarkMode(state: any) {
        state.darkMode = true
    },

    disableDarkMode(state: any) { 
        state.darkMode = false
    }
}

export default createStore({
    state,
    mutations
})