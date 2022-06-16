<template lang="">
  <Label
    :tag="getTagLabel"
    :labelName="data.label"
    :labelNote="data.labelNote"
    :subTag="data.selectOne ? 'どちらか' : ''"
    :disabled="data.disabled"
  >
    <input
      type="text"
      :placeholder="data.placeholder"
      class="input"
      :value="data.value"
      @input="setInput($event)"
    />
  </Label>
</template>
<script>
import Label from "./Label.vue";

export default {
  props: {
    setValue: {
      type: Function,
      default: () => () => {},
    },
    data: {
      type: Object,
      default: () => {
        return {
          type: "input-text",
          name: "",
          label: "",
          required: true, 
          placeholder: "入力してください",
          value: "",
          searchIcon: false,
          selectOne: false,
          labelNote: "",
          apiSearch: "",
          disabled: false,
        };
      },
    },
  },
  components: {
    Label,
  },
  computed: {
    getTagLabel() {
      return this.data.required ? "必須" : "";
    },
  },
  methods: {
    setInput(event) {
      // this.data.value = event.target.value;
      this.setValue(this.data.name, event.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;
  padding: 14px 10px;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
}
.input::placeholder {
  color: #999999;
}
</style>
