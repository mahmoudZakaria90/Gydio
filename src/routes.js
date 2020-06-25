import Vue from 'vue';
import VueRouter from 'vue-router';

import Uploader from './pages/Uploader';
import Explore from './pages/Explore';
import Register from './pages/Auth/Register';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Uploader },
    { path: '/explore', component: Explore },
    { path: '/register', component: Register }

]

export default new VueRouter({
    routes
})