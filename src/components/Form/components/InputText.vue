<template lang="">
  <Label
    :tag="getTagLabel"
    :labelName="data.label"
    :labelNote="data.labelNote"
    :subTag="data.selectOne ? 'どちらか' : ''"
    :disabled="data.disabled"
  >
    <div class="input-wrap">
      <img
        src="../../../assets/magnifying-glass.png"
        v-show="data.searchIcon"
      />
      <input
        type="text"
        :placeholder="data.placeholder"
        class="input"
        :value="data.value"
        @input="setInput($event)"
        :disabled="data.disabled"
      />
    </div>
  </Label>
</template>
<script>
import Label from "./Label.vue";
import mixinsInput from "../mixins/mixins-input";

export default {
  props: {
    setValue: {
      type: Function,
      default: () => () => {},
    },
  },
  components: {
    Label,
  },
  mixins: [mixinsInput],
};
</script>
<style lang="scss" scoped>
.input-wrap {
  display: flex;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 14px 10px;
  font-size: 16px;
  line-height: 16px;
  color: #333333;
  margin-bottom: 24px;
  img {
    margin-right: 5px;
  }
}
.input {
  border: 0;
  outline: none;
}
.input::placeholder {
  color: #999999;
}
</style>
