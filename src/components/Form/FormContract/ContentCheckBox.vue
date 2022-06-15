<template lang="">
  <Label>
    <div class="wrap-checkbox">
      <input type="checkbox" v-model="checkbox" value="true" />
      <span>{{ label }}</span>
    </div>
  </Label>
</template>
<script>
import Label from "../components/Label.vue";
export default {
  components: {
    Label,
  },
  props: {
    value: {
      type: String,
      default: () => "accept",
    },
    label: {
      type: String,
      default: () => "同意する場合はチェックをしてください",
    },
    required: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    checkbox: {
      get() {
        return this.$store.getters.getContractCheckbox(this.value);
      },
      set(value) {
        this.$store.dispatch("contract/setCheckbox", {
          name: this.value,
          value: value,
        });
      },
    },
  },
};
</script>
<style lang="css" scoped>
.wrap-checkbox {
  display: flex;
  align-items: center;
}
.wrap-checkbox input {
  width: 16px;
  height: 16px;
  margin-right: 12px;
}
.wrap-checkbox span {
  font-size: 14px;
  line-height: 14px;
  color: #333333;
}
</style>
