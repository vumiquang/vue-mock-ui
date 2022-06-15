<template lang="">
  <label>
    <div class="tag">
      <div class="tag-group">
        <div class="tag-white" v-show="subTag !== ''">{{ subTag }}</div>
        <div class="tag-red">{{ tag }}</div>
      </div>
      <div class="label-name" v-show="labelName !== ''">
        {{ labelName }}
        <span class="label-condition" v-show="labelCondition !== ''"
          >（{{ labelCondition }}）</span
        >
      </div>
    </div>
    <div class="label-note" v-show="labelNote !== ''">
      {{ labelNote }}
    </div>
    <slot></slot>
  </label>
</template>
<script>
export default {
  props: {
    subTag: {
      type: String,
      default: () => "",
    },
    tag: {
      type: String,
      default: () => "必須",
    },
    labelName: {
      type: String,
      default: () => "",
    },
    labelCondition: {
      type: String,
      default: () => "",
    },
    labelNote: {
      type: String,
      default: () => "",
    },
  },
};
</script>
<style lang="css" scoped>
.tag {
  display: flex;
  margin-bottom: 6px;
}
.tag-group {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ed5d5d;
  border-radius: 2px;
  padding: 2px;
  padding-right: 4px;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  margin-right: 4px;
  min-width: 42px;
}
.tag-white {
  color: #ed5d5d;
  background-color: white;
  padding: 1px 2px;
  margin-right: 3px;
}
.tag-red {
  color: white;
}
.label-name {
  font-size: 14px;
  color: #333333;
}
.label-note {
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
}
</style>
