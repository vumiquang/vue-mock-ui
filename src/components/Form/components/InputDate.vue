<template lang="">
  <div class="input-date">
    <Label
      :tag="getTagLabel"
      :labelName="data.label"
      :labelNote="data.labelNote"
      :subTag="data.selectOne ? 'どちらか' : ''"
      :disabled="data.disabled"
    >
      <label class="input-wrap">
        <input type="date" v-model="value" />
        <div class="display-date">
          <p v-show="value !== ''">{{ formatDate }}</p>
          <img src="../../../assets/calendar.png" />
        </div>
      </label>
    </Label>
  </div>
</template>
<script>
import mixinsInput from "../mixins/mixins-input";
import Label from "../components/Label.vue";
export default {
  data() {
    return {
      value: "",
    };
  },
  mixins: [mixinsInput],
  components: {
    Label,
  },
  computed: {
    formatDate() {
      if (!this.value) return "";
      let date = new Date(Date.parse(this.value));
      let strDate = `${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
      return strDate;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.input-date {
  margin-bottom: 25px;
}
.input-wrap {
  display: flex;
  padding: 14px 11px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  width: 160px;
  position: relative;
  input {
    opacity: 0;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    z-index: 10;
    background: transparent;
    color: transparent;
    opacity: 0;
    cursor: pointer;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
  }
  .display-date {
    position: absolute;
    height: 100%;
    align-items: center;
    inset: 0;
    pointer-events: none;
    display: flex;
    padding: 0 13px;
    img {
      width: 18px;
      height: 20px;
      margin-left: auto;
    }
  }
}
</style>
