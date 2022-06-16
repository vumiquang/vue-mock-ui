const getters = {
  getContractField: (state) => state.contract.field,
  getContractAccept: (state) => state.contract.accept,
  getCurrentForm: (state) => state.formStep[state.currentForm],
  getRegisterDeadline: (state) => state.registerDeadline,
  getContractCheckbox: (state) => (name) => state.contract[name],
  getFieldEmployee: (state) => state.employee.field,
  isFirstCurrentForm: (state) => state.currentForm === 0,
  getCurrentStep: (state) => state.currentForm,
  isCurrentFormFinish: (state) => {
    if (state.currentForm === 0) {
      return state.contract.getCurrentFormFinish;
    } else if (state.currentForm < 4) {
      return state.employee.finish;
    } else {
      return false;
    }
  },
  
};

export default getters;
