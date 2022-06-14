<template lang="">
  <div class="text">
    <p v-for="(t, index) in text" :key="index">{{ t }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="css" scoped>
.text {
  padding: 8px 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 8px;
}
.text p {
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}
</style>
