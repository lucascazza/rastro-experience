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
    register({ dispatch, commit, getters, rootGetters }, { vm, userToSave }) {
        return new Promise(async (resolve, reject) => {
            try {          
                let createResponse = await vm.$api.user().register(userToSave);
                console.log(createResponse)
                resolve(createResponse.body);
            } catch(err) {
                reject(err.message || err.body.message);
            }
        });
    }
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
