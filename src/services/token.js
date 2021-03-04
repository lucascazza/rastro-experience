import store from '../store';
import router from '../router';

export default {
    install (Vue, options) {
        Vue.http.headers.common['Authorization'] = store.getters['user/token'];
        Vue.http.interceptors.push(req => {
            return res => {
                if( router.app._route.matched[0].name !== 'Register' ){
                    if(res.status == 401) {
                        store.commit('user/clearData');
                        router.push({name: 'Login'});
                    } else if(res.body.token) {
                        store.commit('user/setToken', 'Bearer ' + res.body.token);
                        Vue.http.headers.common['Authorization'] = 'Bearer ' + res.body.token;
                    }
                }
            };
        });
    }
}