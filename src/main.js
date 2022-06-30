import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import '@/scss/custom.scss'
import Cart from './utils/Cart'

Vue.config.productionTip = false

const savedCartItems = localStorage.getItem('cartItems');
if(savedCartItems === undefined || savedCartItems === null) {
  localStorage.setItem('cartItems', JSON.stringify([]));
}

const cart = new Cart();
Vue.prototype.$cart = cart
Vue.prototype.$miniCart = Vue.observable({
  status: false,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
