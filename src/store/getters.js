const getters = {
  getContractField: (state) => state.contract.field,
  getContractAccept: (state) => state.contract.accept,
  getCurrentForm: (state) => state.formStep[state.currentForm],
  getRegisterDeadline: (state) => state.registerDeadline,
};

export default getters;
