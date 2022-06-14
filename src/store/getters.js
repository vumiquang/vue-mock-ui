const getters = {
  getContractField: (state) => state.contract.field,
  getContractAccept: (state) => state.contract.accept,
  getCurrentForm: (state) => state.formStep[state.currentForm],
  getRegisterDeadline: (state) => state.registerDeadline,
<<<<<<< HEAD
  getContractCheckbox: (state) => (name) => state.contract[name],
=======
>>>>>>> c997eb9... create contract form
};

export default getters;
