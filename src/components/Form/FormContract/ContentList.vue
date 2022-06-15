<template lang="">
  <ul class="list">
    <li class="list-item" v-for="(rule, index) in text" :key="index">
      <span class="number">{{ index + 1 }}</span>
      <p class="text">
        {{ rule }}
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
      note:"Array:String"
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
  margin-bottom: 16px;
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
