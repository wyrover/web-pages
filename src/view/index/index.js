import Vue from 'vue'
import App from './index.vue'

var AppCons = Vue.extend(App)
var app = new AppCons
app.$mount('#app')
