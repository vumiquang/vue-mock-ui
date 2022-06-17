<template lang="">
  <div class="input-radio">
    <Label
      :tag="getTagLabel"
      :labelName="data.label"
      :labelNote="data.labelNote"
      :subTag="data.selectOne ? 'どちらか' : ''"
      :disabled="data.disabled"
    >
      <div class="radio-wrap">
        <div class="radio-control" v-for="value in data.select" :key="value">
          <label>
            <input type="radio" :value="value" :name="data.name" />
            <span>{{ value }}</span>
          </label>
        </div>
      </div>
    </Label>
  </div>
</template>
<script>
import mixinsInput from "../mixins/mixins-input";
import Label from "./Label.vue";
export default {
  components: {
    Label,
  },
  mixins: [mixinsInput],
};
</script>
<style lang="scss">
.input-radio {
  margin-bottom: 25px;
  .radio-wrap {
    display: flex;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .radio-control {
      flex: 1;
      padding: 12px 0;
      label {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 16px;
        color: #666666;
        margin-left: 9px;
      }
    }
    .radio-control ~ .radio-control {
      border-left: 1px solid #dcdcdc;
    }
    input {
      width: 16px;
      height: 16px;
      position: relative;
      margin-top: 2px;
    }
    input[type="radio"]:after {
      width: 16px;
      height: 16px;
      border-radius: 16px;
      top: -2px;
      left: -1px;
      position: absolute;
      background-color: White;
      content: "";
      display: inline-block;
      visibility: visible;
      border: 1px solid #353535;
    }

    input[type="radio"]:checked:after {
      border: 1px solid #45d1c9;
    }
    input[type="radio"]:before {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      top: 2px;
      left: 3px;
      z-index: 10;
      position: absolute;
      background-color: #45d1c9;
      content: "";
      display: inline-block;
      visibility: hidden;
    }

    input[type="radio"]:checked:before {
      visibility: visible;
    }
  }
}
</style>
