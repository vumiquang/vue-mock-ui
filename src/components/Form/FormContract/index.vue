<template lang="">
  <div>
    <WrapBlock
      v-for="(field, indexField) in getContractField"
      :key="indexField"
    >
      <h4 class="title">{{ field.name }}</h4>
      <Content
        v-for="(content, indexContent) in field.contents"
        :content="content"
        :key="indexContent"
      ></Content>
      <div v-if="field.subField">
        <h4 class="title">{{ field.subField.name }}</h4>
        <Content
          v-for="(content, index) in field.subField.contents"
          :content="content"
          :key="index"
        ></Content>
      </div>
    </WrapBlock>

    <div class="notify">
      <img src="../../../assets/chat-info-icon.png" />
      <div class="notify-content">
        <p>雇用契約や入社手続きについて</p>
        <p>ご不明点はお問い合わせください</p>
      </div>
    </div>

    <Button
      :fullWidth="true"
      :backgroundFullColor="true"
      :clickFunction="nextForm"
    ></Button>
  </div>
</template>

<script>
import WrapBlock from "../components/WrapBlock.vue";
// import ContentText from "./ContentText.vue";
// import ContentList from "./ContentList.vue";
import Content from "./Content.vue";
import { mapGetters } from "vuex";
import Button from "../components/Button.vue";
export default {
  computed: {
    ...mapGetters(["getContractField"]),
  },
  components: {
    WrapBlock,
    Content,
    Button,
    // ContentText,
    // ContentList,
  },
  methods: {
    nextForm() {
      this.$store.dispatch("nextForm");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: #333333;
  margin-bottom: 8px;
}
.notify {
  padding: 23px 20px;
  display: flex;
  background-color: #f1f2f7;
  margin-bottom: 16px;
  align-items: center;
  img {
    margin-right: 20px;
  }
  &-content {
    font-size: 18px;
    color: #666666;
  }
}
</style>
