import Vue from 'vue';
import VueRouter from 'vue-router';

import Uploader from './pages/Uploader';
import Explore from './pages/Explore';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Uploader, name: 'Uploader' },
    { path: '/explore', component: Explore, name: 'Explore' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/login', component: Login, name: 'Login' }

]

export default new VueRouter({
    routes
})