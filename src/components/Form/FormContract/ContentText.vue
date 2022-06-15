<template lang="">
  <div class="text">
    <p v-show="getContentTitle">
      {{ getContentTitle }}
    </p>
    <p>{{ content.text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
      note: "{type:String,text:String,title:?String} ",
    },
  },
  computed: {
    getContentTitle() {
      return this.content?.title ?? "";
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
