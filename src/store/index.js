import Vue from "vue";
import Vuex from "vuex";
<<<<<<< HEAD
import contract from "./modules/contract";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
=======
import getters from "./getters";
import posts from "./modules/posts";
import input from "./modules/input";
>>>>>>> b04eba2... init pr and layout

Vue.use(Vuex);

const store = new Vuex.Store({
<<<<<<< HEAD
  state,
  mutations,
  actions,
  modules: {
    contract,
=======
  state: {},
  modules: {
    posts,
    input,
>>>>>>> b04eba2... init pr and layout
  },
  getters,
});

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> b04eba2... init pr and layout
