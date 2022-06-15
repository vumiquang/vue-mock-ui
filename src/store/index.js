import Vue from "vue";
import Vuex from "vuex";
import contract from "./modules/contract";
import employee from "./modules/employee";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    contract,
    employee,
  },
  getters,
});

export default store;
