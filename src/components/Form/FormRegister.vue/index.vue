<template lang="">
  <div>
    <WrapBlock>
      <Title></Title>
      <InputText :data="data"></InputText>
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
import Title from "../components/Title.vue";
import InputText from "../components/InputText.vue";

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
    Title,
    InputText,
  },
  computed: {
    ...mapGetters(["isCurrentFormFinish", "getFieldEmployee"]),
  },
  methods: {
    nextForm() {
      // this.isCurrentFormFinish &&
      this.$store.dispatch("nextForm");
    },
  },
};
</script>
<style lang="css"></style>
