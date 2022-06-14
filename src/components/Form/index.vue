<template lang="">
  <div class="form">
    <h1 class="form-title">雇用契約について</h1>
    <FormProgress></FormProgress>
    <p class="form-end-time">
      <img src="../../assets/calendar-icon.png" /><span
        >{{ getRegisterDeadline }}までご登録ください</span
      >
    </p>
    <WrapBlock>
      <h3 class="warning-title">
        <img src="../../assets/warning-icon.png" /><span>ご確認ください</span>
      </h3>
      <p class="warning-content">
        名前と生年月日が表示されている場合は正しく表示されているか確認をして、間違えている場合は修正をお願いいたします。
      </p>
    </WrapBlock>
    <FormContract v-if="getCurrentForm === 'contract'"></FormContract>
    <FormRegister
      v-else-if="getCurrentForm === 'before-register'"
      :register="false"
    ></FormRegister>
    <FormRegister
      v-else-if="getCurrentForm === 'register'"
      :register="true"
    ></FormRegister>
    <FormResultRegister
      v-else-if="getCurrentForm === 'after-register'"
    ></FormResultRegister>
    <FormThankYou v-else></FormThankYou>
  </div>
</template>

<script>
import FormThankYou from "./FormThankYou.vue";
import FormResultRegister from "./FormResultRegister.vue";
import FormRegister from "./FormRegister.vue";
import FormProgress from "./FormProgress.vue";
import FormContract from "./FormContract";
import WrapBlock from "./WrapBlock.vue";

import { mapGetters } from "vuex";
export default {
  components: {
    FormProgress,
    FormContract,
    WrapBlock,
    FormThankYou,
    FormResultRegister,
    FormRegister,
  },
  computed: {
    ...mapGetters(["getCurrentForm", "getRegisterDeadline"]),
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
  margin-bottom: 18px;
}
.form-end-time span {
  margin-left: 10px;
}
.warning-title {
  font-size: 18px;
  color: #333333;
  font-weight: 700;
  margin-bottom: 18px;
}
.warning-title img {
  vertical-align: bottom;
  margin-right: 8px;
}
.warning-content {
  font-size: 14px;
  color: #666666;
}
</style>
