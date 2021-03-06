// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styles/main.scss';
import 'lib-flexible/flexible'
import {Toast, Dialog, Lazyload} from 'vant';

Toast.setDefaultOptions({duration: 3000});
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Lazyload, {
    lazyComponent: true,
    attempt: 1
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
