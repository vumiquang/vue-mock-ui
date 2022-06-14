const mutations = {
  NEXT_FORM: (state) => {
    if (state.currentForm < state.formStep.length - 1) {
      state.currentForm += 1;
    }
  },
  PREV_FORM: (state) => {
    if (state.currentForm > 0) {
      state.currentForm -= 1;
    }
  },
};

export default mutations;
