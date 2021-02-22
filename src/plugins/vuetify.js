import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        themes: {
            light: {
                primary: '#5852F2',
                secondary: '#8CDD58',
                accent: '#F9C80E',
                error: '#FF4949',
                warning: '#F2D600',
                info: '#03a9f4',
                success: '#04BF68',
                cyan: '#10fecc',
                magenta: '#ff445a',
                yellow: '#ebff29',
                green: '#4eff45',
                black: '#232323',
                disabled: '#c2cbcd'
            }
        }
    }
});
