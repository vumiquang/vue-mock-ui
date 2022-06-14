<template lang="">
<<<<<<< HEAD
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
=======
  <div>
    <div class="required-tag">必須</div>
    <label>
      <input type="checkbox" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
<script>
export default {
>>>>>>> c997eb9... create contract form
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
<<<<<<< HEAD
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
=======
};
</script>
<style lang=""></style>
>>>>>>> c997eb9... create contract form
