import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "./assets/general.sass"

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


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
}).$mount('#app')
