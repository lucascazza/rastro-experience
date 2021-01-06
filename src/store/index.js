import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersist from 'vuex-persist';
import user from './modules/user';


Vue.use(Vuex)

// Configuracion para guardar los stores en el localStorage
// const vuexLocalStorage = new VuexPersist({
//     key: 'store-rastro',
//     storage: window.localStorage,
//     reducer: (state) => ({
//         user: state.user,
//         images: {
//             active: state.images.active
//         },
//         stages: {
//             selected: state.stages.selected
//         },
//         flights: {
//             flying: state.flights.flying,
//             selected: state.flights.selected
//         },
//         notes: {
//             tracking: state.notes.tracking
//         },
//         mainMenu: {
//             selected: state.mainMenu.selected
//         },
//         checkout: {
//             selectedPlan: state.checkout.selectedPlan,
//             selectedHectares: state.checkout.selectedHectares
//         }
//     })
// });

export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    actions: {
    },
    mutations: {
    },
    modules: {
        user
    },
    plugins: [
        // vuexLocalStorage.plugin
    ]
})