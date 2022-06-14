<template lang="">
  <div>
    <div class="required-tag">必須</div>
    <label>
      <input type="checkbox" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: () => "accept",
    },
    label: {
      type: String,
      default: () => "同意する場合はチェックをしてください",
    },
    required: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>
<style lang=""></style>
