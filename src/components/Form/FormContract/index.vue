<template lang="">
  <div>
    <WrapBlock v-for="(field, key) in getContractField" :key="key">
      <div v-for="(part, i) in field" :key="i">
        <h4 class="title">{{ part.name }}</h4>
        <Content
          v-for="(content, index) in part.contents"
          :content="content"
          :key="index"
        ></Content>
      </div>
    </WrapBlock>
  </div>
</template>

<script>
import WrapBlock from "../WrapBlock.vue";
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
