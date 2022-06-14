<template lang="">
  <div class="text">
<<<<<<< HEAD
    <p v-show="content.title !== undefined">
      {{ content.title ? content.title : "" }}
    </p>
    <p>{{ content.text }}</p>
=======
    <p v-for="(t, index) in text" :key="index">{{ t }}</p>
>>>>>>> c997eb9... create contract form
  </div>
</template>
<script>
export default {
  props: {
<<<<<<< HEAD
    content: {
      type: Object,
      default: () => {},
=======
    text: {
      type: Array,
      default: () => [],
>>>>>>> c997eb9... create contract form
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
