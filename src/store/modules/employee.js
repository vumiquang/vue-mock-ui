/* eslint-disable */
const title = {
  type: "title",
  title: "",
  description: "",
};
// eslint-disable-next-line
const inputFile = {
  type: "input-file",
  label: "",
  required: true,
  selectOne: false,
  value: "",
  name: "",
};

const inputText = {
  type: "input-text",
  name: "",
  label: "",
  required: true,
  placeholder: "入力してください",
  value: "",
  searchIcon: false,
  selectOne: false,
};

const inputRadio = {
  type: "input-radio",
  name: "",
  label: "",
  value: "",
  select: [],
  required: true,
  selectOne: false,
};

const inputSingleDate = {
  type: "input-single-date",
  required: true,
  value: {
    day: "",
    month: "",
    year: "",
  },
  label: "",
  name: "",
  selectOne: false,
};

const inputDate = {
  type: "input-date",
  required: true,
  value: "",
  label: "",
  name: "",
  selectOne: false,
};
const label = {
  label: "",
  description: "",
};

const inputNumber = {
  type: "input-number",
  name: "",
  label: "",
  required: true,
  selectOne: false,
  placeholder: "半角",
  value: "",
};

const inputSelect = {
  type: "input-select",
  select: [],
  value: "",
  name: "",
  label: "",
  selectOne: false,
  required: true,
};

const inputRange = {
  type: "input-range",
  valueFrom: "",
  valueTo: "",
  label: "",
  required: true,
  selectOne: false,
  name: "",
};

const inputArea = {
  type: "input-area",
  value: "",
  label: "",
  placeholder: "入力してください",
  required: true,
  selectOne: false,
  name: "",
};

const state = {
  name: "入社手続きの登録をお願いいたします",
  
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
