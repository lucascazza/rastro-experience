export default {
    install(Vue) {
        let serverUrl = process.env.VUE_APP_SERVER;
        let api = {
            user() {
                return {
                    getUser: () => Vue.http.get(`${serverUrl}/user`),
                    getAllUsers: () => Vue.http.get(`${serverUrl}/user/all`),
                    register: (formData) => Vue.http.post(`${serverUrl}/user/register`, formData),
                    update: (UserId) => Vue.http.post(`${serverUrl}/user/${UserId}`),
                    delete: (UserId) => Vue.http.post(`${serverUrl}/user/${UserId}`)
                }
            }
        };
        Vue.prototype.$api = api;
    }
}