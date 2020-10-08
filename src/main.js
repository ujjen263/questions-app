import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import VueResource from 'vue-resource';
import Vuelidate from 'vuelidate'
import store from './store/store';

Vue.use(VueRouter);

Vue.use(Vuelidate);

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'https://questions-e441a.firebaseio.com/';

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export const eventBus = new Vue();

new Vue({
    render: h => h(App),
    router: router,
    store,
}).$mount('#app')