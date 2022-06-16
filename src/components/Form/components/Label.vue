<template lang="">
  <label :disabled="disabled">
    <div class="tag" v-show="getSubTag || getTag">
      <div class="tag-group">
        <div class="tag-white" v-show="getSubTag">{{ getSubTag }}</div>
        <div class="tag-red" v-show="getTag">{{ getTag }}</div>
      </div>
      <div class="label-name" v-show="getLabelName">
        {{ getLabelName }}
        >
      </div>
    </div>
    <div class="label-note" v-show="getLabelNote">
      {{ getLabelNote }}
    </div>
    <slot></slot>
  </label>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: () => false,
    },
    subTag: {
      type: String,
      default: () => "",
    },
    tag: {
      type: String,
      default: () => "",
    },
    labelName: {
      type: String,
      default: () => "",
    },
    labelNote: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    getTag() {
      return this?.tag ?? "";
    },
    getSubTag() {
      return this?.subTag ?? "";
    },
    getLabelName() {
      return this?.labelName ?? "";
    },
    getLabelNote() {
      return this?.labelNote ?? "";
    },
  },
};
</script>
<style lang="scss" scoped>
label:disabled,
label[disabled] {
  .tag-group {
    background-color: #999999;
  }
  .tag-white,
  .tag-red,
  .label-name,
  .label-note {
    color: #dcdcdc;
  }
}
label {
  .tag {
    display: flex;
    margin-bottom: 8px;
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
}
</style>
