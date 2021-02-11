export default {
    install(Vue) {
        let serverUrl = process.env.VUE_APP_SERVER;
        let api = {
            user() {
                return {
                    get: () => Vue.http.get(`${serverUrl}/user`),
                    register: (formData) => Vue.http.post(`${serverUrl}/user/register`, formData),
                    login: (formData) => Vue.http.post(`${serverUrl}/user/login`, formData),
                    update: (UserId) => Vue.http.post(`${serverUrl}/user/${UserId}`)
                }
            }
        };
        Vue.prototype.$api = api;
    }
}