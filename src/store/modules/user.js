const state = {
    data: {},
    token: ''
}

// getters
const getters = {
    data: state => {
        return state.data;
    },
    token: state => {
        return state.token;
    }
}

// actions
const actions = {
    // loadData({ dispatch, commit, getters, rootGetters }, { vm }) {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             let responseUser = await vm.$api.user().get();
    //             vm.$i18n.locale = responseUser.body.data.language || navigator.language.split("-")[0];
    //             commit('setData', responseUser.body.data);
    //             resolve(responseUser.body.data);
    //         } catch(err) {
    //             reject(err.message || err.body.message);
    //         }
    //     });
    // }
}

// mutations
const mutations = {
    // setData(state, data) {
    //     state.data = data;
    //     if(data && data.email) {
    //         amplitude.getInstance().setUserId(data.email);
    //         amplitude.getInstance().regenerateDeviceId();
    //     }
    // },
    setToken(state, token) {
        state.token = token;
    },
    clearData(state) {
        state.data = {};
        state.token = '';
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
