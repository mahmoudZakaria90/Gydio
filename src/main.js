import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import firebase from "firebase/app";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faCheckCircle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./assets/sass/general.sass";

import Header from "./components/Header";

import "firebase/storage";
import 'firebase/auth';
import 'firebase/database';

library.add(faPlusCircle, faCheckCircle, faArrowCircleUp, faTimesCircle, faFacebookF);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Header', Header);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcgNUdZo31IDTvypMjfHvPPms3EPWAycM",
  authDomain: "musicstream-cb9d3.firebaseapp.com",
  databaseURL: "https://musicstream-cb9d3.firebaseio.com",
  projectId: "musicstream-cb9d3",
  storageBucket: "musicstream-cb9d3.appspot.com",
  messagingSenderId: "801591518704",
  appId: "1:801591518704:web:fe152ffb22de13e8fc2935"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
