<template lang="">
  <div>
    <slot name="header"></slot>
    <main class="wrap-content">
      <slot></slot>
    </main>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.wrap-content {
  width: 560px;
  margin: 0 auto;
}
</style>
