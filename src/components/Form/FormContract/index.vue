<template lang="">
  <div>
    <WrapBlock v-for="(field, key) in getContractField" :key="key">
      <h4 class="title">{{ field.name }}</h4>
      <Content
        v-for="(content, index) in field.contents"
        :content="content"
        :key="index"
      ></Content>
      <div v-if="field.subField !== undefined">
        <h4 class="title">{{ field.subField.name }}</h4>
        <Content
          v-for="(content, index) in field.subField.contents"
          :content="content"
          :key="index"
        ></Content>
      </div>
    </WrapBlock>
  </div>
</template>

<script>
import WrapBlock from "../components/WrapBlock.vue";
// import ContentText from "./ContentText.vue";
// import ContentList from "./ContentList.vue";
import Content from "./Content.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getContractField"]),
  },
  components: {
    WrapBlock,
    Content,
    // ContentText,
    // ContentList,
  },
};
</script>

<style lang="css" scoped>
.title {
  font-size: 18px;
  color: #333333;
  margin-bottom: 8px;
}
</style>
