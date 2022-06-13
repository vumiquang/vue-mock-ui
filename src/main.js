<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import "./assets/global.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
=======
import Vue from 'vue'
import App from './App.vue'
import "./assets/global.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
>>>>>>> b04eba2... init pr and layout
