import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import VueResource from 'vue-resource';

import store from './store/store';
import VueMathjax from 'vue-mathjax'

Vue.use(VueRouter);

Vue.use(VueMathjax); // enable MaxJax in all of our pages

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