<template lang="">
  <div>
    <WrapBlock v-for="(field, fieldName) in getFieldEmployee" :key="fieldName">
      <Content
        v-for="(control, index) in flatControl(field)"
        :control="control"
        :key="index"
      ></Content>
    </WrapBlock>
    <Button
      :fullWidth="true"
      :backgroundFullColor="true"
      :clickFunction="nextForm"
    ></Button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import WrapBlock from "../components/WrapBlock.vue";
import Button from "../components/Button.vue";
import Content from "./Content.vue";
export default {
  data() {
    return {
      data: {
        type: "input-text",
        name: "",
        label: "",
        required: true,
        placeholder: "入力してください",
        value: "",
        searchIcon: false,
        selectOne: false,
        labelNote: "",
        apiSearch: "",
        disabled: false,
      },
    };
  },
  components: {
    WrapBlock,
    Button,
    Content,
  },
  computed: {
    ...mapGetters(["isCurrentFormFinish", "getFieldEmployee"]),
  },
  methods: {
    nextForm() {
      this.$store.dispatch("nextForm");
    },
    flatControl(field) {
      let controls = [];
      for (let control of field) {
        if (control.type !== "multivalue") controls.push(control);
        else {
          let subControls = control.data.flat();
          for (let subControl of subControls) {
            controls.push(subControl);
          }
        }
      }
      return controls;
    },
  },
};
</script>

<style lang="css"></style>
