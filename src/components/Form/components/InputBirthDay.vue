<template lang="">
  <div class="input-date">
    <Label
      :tag="getTagLabel"
      :labelName="data.label"
      :labelNote="data.labelNote"
      :subTag="data.selectOne ? 'どちらか' : ''"
      :disabled="data.disabled"
    >
      <div class="input-wrap">
        <input type="text" placeholder="西暦（半角）" />
        <span>年</span>
        <input type="text" placeholder="半角" />
        <span>月</span>
        <input type="text" placeholder="半角" />
        <span>日</span>
      </div>
      <p>年齢</p>
      <p>20歳</p>
    </Label>
  </div>
</template>
<script>
import mixinsInput from "../mixins/mixins-input";
import Label from "./Label.vue";
export default {
  mixins: [mixinsInput],
  components: {
    Label,
  },
};
</script>
<style lang="scss" scoped>
.input-date {
  margin-bottom: 25px;
}
.input-wrap {
  display: flex;
  align-items: center;
  input {
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    outline: 0;
    padding: 16px 10px;
    max-width: 116px;
    color: #333333;
    margin-right: 8px;
    &::placeholder {
      font-size: 16px;
      color: #999999;
    }
  }
  span {
    margin-right: 16px;
  }
}
</style>
