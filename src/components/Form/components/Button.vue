<template lang="">
  <button
    class="btn"
    :class="{ 'btn-full': fullWidth, 'btn-bg-full': backgroundFullColor }"
    :style="{ '--color-main': color }"
    @click="clickFunction"
  >
    住所取得
  </button>
</template>
<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: () => false,
    },
    clickFunction: {
      type: Function,
      default: () => true,
    },
    backgroundFullColor: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: () => "#b2b1ff",
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  border: 1px solid var(--color-main);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  outline: 0;
  padding: 8px 25px;
  cursor: pointer;
  background: white;
  color: var(--color-main);
}
.btn.btn-full {
  display: block;
  width: 100%;
}
.btn.btn-bg-full {
  background: var(--color-main);
  color: white;
}
</style>
