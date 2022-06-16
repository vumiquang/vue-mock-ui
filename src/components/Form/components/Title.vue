<template lang="">
  <div>
    <h3 class="title">{{ data.title }}</h3>
    <p class="description">{{ data.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return { type: "title", title: "基本情報登録", description: "基本情報登録" };
        // return { type: "title", title: "", description: "" };
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: #333333;
  margin-bottom: 8px;
}
.description {
  font-size: 14px;
  line-height: 22px;
  color: #666666;
  margin-bottom: 24px;
}
</style>
