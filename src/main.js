import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import firebase from "firebase/app";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle, faCheckCircle, faArrowCircleUp, faCog } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./assets/sass/general.sass";

import Header from "./components/Header";

import "firebase/storage";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

library.add(faPlusCircle, faCheckCircle, faArrowCircleUp, faTimesCircle, faFacebookF, faGoogle, faPlayCircle,
  faPauseCircle, faCog);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Header', Header);

const {
  VUE_APP_API_KEY,
  VUE_APP_AUTH_DOMAIN,
  VUE_APP_DATA_BASEURL,
  VUE_APP_PROJECT_ID,
  VUE_APP_STORAGE_BUCKET,
  VUE_APP_MESSAGING_SENDER_ID,
  VUE_APP_APP_ID
} = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  databaseURL: VUE_APP_DATA_BASEURL,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
  appId: VUE_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
