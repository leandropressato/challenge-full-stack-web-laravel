/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
 import Vue from 'vue';
 
 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import Vuetify from 'vuetify';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import createAuthRefreshInterceptor from 'axios-auth-refresh';
 import { routes } from './routes';
 import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
 import Paginate from 'vuejs-paginate';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
 
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
 
 Vue.use(VueRouter);
 Vue.use(BootstrapVue);
 Vue.use(IconsPlugin);
 Vue.use(VueAxios, axios,createAuthRefreshInterceptor);
 Vue.use(Vuetify);
 Vue.component('paginate', Paginate)
 //Vue.component('paginate', VuejsPaginate)
 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });
  
 const app = new Vue({
     el: '#app',
     router: router,
     vuetify: new Vuetify(),
     components:{App},
     render: h => h(App),
 });