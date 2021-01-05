export default {
    install(Vue) {
        let serverUrl = process.env.VUE_APP_SERVER;
        let api = {
            user() {
                return {
                    get: () => Vue.http.get(`${serverUrl}/user`),
                    send: (formData) => Vue.http.post(`${serverUrl}/user/message`, formData)
                }
            }
        };
        Vue.prototype.$api = api;
    }
}