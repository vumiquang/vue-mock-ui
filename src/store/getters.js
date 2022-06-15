const getters = {
  getContractField: (state) => state.contract.field,
  getContractAccept: (state) => state.contract.accept,
  getCurrentForm: (state) => state.formStep[state.currentForm],
  getRegisterDeadline: (state) => state.registerDeadline,
<<<<<<< HEAD
<<<<<<< HEAD
  getContractCheckbox: (state) => (name) => state.contract[name],
=======
>>>>>>> c997eb9... create contract form
=======
  getContractCheckbox: (state) => (name) => state.contract[name],
>>>>>>> 4f6cf3b... render contract form
};

export default getters;
