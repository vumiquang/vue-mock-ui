<template lang="">
  <div class="form">
    <h1 class="form-title">雇用契約について</h1>
    <FormProgress></FormProgress>
    <p class="form-end-time">
      <img src="../../assets/calendar-icon.png" /><span
        >2021/09/01までご登録ください</span
      >
    </p>
  </div>
</template>

<script>
import FormProgress from "./FormProgress.vue";
export default {
  components: {
    FormProgress,
  },
};
</script>

<style lang="css">
.form {
  margin-top: 50px;
}
.form-title {
  font-weight: 400;
  font-size: 24px;
  color: #333333;
  margin-bottom: 24px;
}
.form-end-time {
  display: flex;
  align-items: center;
  
}
</style>
