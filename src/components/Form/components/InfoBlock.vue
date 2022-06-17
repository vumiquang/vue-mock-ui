<template lang="">
  <div class="info-block">
    <p>{{ data.label }}</p>
    <p>{{ data.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.info-block {
  font-size: 14px;
  color: #333333;
}
</style>
