import Vue from 'vue';
import VueRouter from 'vue-router';

import Uploader from './pages/Uploader';
import Explore from './pages/Explore';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Reset from './pages/Auth/Reset';
import Profile from './pages/Auth/Profile';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Uploader, name: 'Uploader' },
    { path: '/explore', component: Explore, name: 'Explore' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/reset', component: Reset, name: 'Reset' },
    { path: '/profile/:id', component: Profile, name: 'Profile' }
]

export default new VueRouter({
    routes
})