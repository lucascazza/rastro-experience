export default {
    install(Vue) {
        let serverUrl = process.env.VUE_APP_SERVER;
        let api = {
            user() {
                return {
                    get: () => Vue.http.get(`${serverUrl}/user`),
                }
            }
        };
        Vue.prototype.$api = api;
    }
}