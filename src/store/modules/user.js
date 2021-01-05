const state = {
    data: {}
}

// getters
const getters = {
    data: state => {
        return state.data;
    }
}

// actions
const actions = {
    loadData({ dispatch, commit, getters, rootGetters }, { vm }) {
        return new Promise(async (resolve, reject) => {
            try {
                let responseUser = await vm.$api.user().get();
                vm.$i18n.locale = responseUser.body.data.language || navigator.language.split("-")[0];
                commit('setData', responseUser.body.data);
                resolve(responseUser.body.data);
            } catch(err) {
                reject(err.message || err.body.message);
            }
        });
    }
}

// mutations
const mutations = {
    setData(state, data) {
        state.data = data;
        if(data && data.email) {
            amplitude.getInstance().setUserId(data.email);
            amplitude.getInstance().regenerateDeviceId();
        }
    },
    clearData(state) {
        state.data = {};
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
