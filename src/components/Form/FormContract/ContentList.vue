<template lang="">
  <ul class="list">
<<<<<<< HEAD
<<<<<<< HEAD
    <li class="list-item" v-for="(t, i) in text" :key="i">
=======
    <li class="list-item" v-for="(t, i) in text">
>>>>>>> c997eb9... create contract form
=======
    <li class="list-item" v-for="(t, i) in text" :key="i">
>>>>>>> 4f6cf3b... render contract form
      <span class="number">{{ i + 1 }}</span>
      <p class="text">
        {{ t }}
      </p>
    </li>
  </ul>
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
.list {
  padding: 8px 10px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
<<<<<<< HEAD
<<<<<<< HEAD
  margin-bottom: 16px;
=======
>>>>>>> c997eb9... create contract form
=======
  margin-bottom: 16px;
>>>>>>> 4f6cf3b... render contract form
}
p.text {
  font-size: 14px;
  line-height: 23px;
  color: #333333;
}
.list-item {
  display: flex;
}
.number {
  padding-right: 15px;
}
</style>
