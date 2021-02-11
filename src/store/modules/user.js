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
    loadData({ dispatch, commit, getters, rootGetters }, { vm }) {
        return new Promise(async (resolve, reject) => {
            try {
                let responseUser = await vm.$api.user().get();
                commit('setData', responseUser.body.data);
                resolve(responseUser.body.data);
            } catch(err) {
                reject(err.message || err.body.message);
            }
        });
    },
    register({ dispatch, commit, getters, rootGetters }, { vm, userToSave }) {
        return new Promise(async (resolve, reject) => {
            try {          
                let createResponse = await vm.$api.user().register(userToSave);
                resolve(createResponse.body);
            } catch(err) {
                reject(err.message || err.body.message);
            }
        });
    },
    login({ dispatch, commit, getters, rootGetters }, { vm, data }) {
        return new Promise(async (resolve, reject) => {
            try {          
                let loginResponse = await vm.$api.user().login(data);
                resolve(loginResponse);
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
    },
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
