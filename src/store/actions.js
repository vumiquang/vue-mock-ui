const acitons = {
  nextForm({ commit }) {
    commit("NEXT_FORM");
  },
  prevForm({ commit }) {
    commit("PREV_FORM");
  },
};

export default acitons;
