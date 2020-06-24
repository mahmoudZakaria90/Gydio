import Vue from 'vue';
import VueRouter from 'vue-router';
import Uploader from './pages/Uploader';
import Explore from './pages/Explore';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Uploader },
    { path: '/explore', component: Explore }
]

export default new VueRouter({
    routes
})