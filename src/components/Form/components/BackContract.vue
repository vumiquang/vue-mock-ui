<template lang="">
  <div class="back-contract" @click="backContract">
    <img src="../../../assets/ArrowLeft.png" />
    <span>雇用契約に戻る</span>
  </div>
</template>
<script>
export default {
  methods: {
    backContract() {
      this.$store.dispatch("prevForm");
    },
  },
};
</script>
<style lang="scss" scoped>
.back-contract {
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 16px;
    color: #666666;
    margin-left: 17px;
  }
  img {
    width: 18px;
    height: auto;
  }
}
</style>
