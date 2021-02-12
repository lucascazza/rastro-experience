export default {
    install(Vue) {
        let serverUrl = process.env.VUE_APP_SERVER;
        let api = {
            user() {
                return {
                    get: () => Vue.http.get(`${serverUrl}/user`),
                    register: (formData) => Vue.http.post(`${serverUrl}/user/register`, formData),
                    login: (formData) => Vue.http.post(`${serverUrl}/user/login`, formData),
                    updateStep: (userId, data) => Vue.http.put(`${serverUrl}/user/${userId}`, data)
                }
            }
        };
        Vue.prototype.$api = api;
    }
}