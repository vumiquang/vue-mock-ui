<template lang="">
  <div>
    <ContentText
      v-if="content.type === 'text'"
      :content="content"
    ></ContentText>
    <ContentList
      v-else-if="content.type === 'list'"
      :text="content.text"
    ></ContentList>
    <ContentCheckBox
      v-else-if="content.type === 'checkbox'"
      :value="content.value"
      :label="content.label"
      :required="content.required"
    ></ContentCheckBox>
  </div>
</template>
<script>
import ContentList from "./ContentList.vue";
import ContentText from "./ContentText.vue";
import ContentCheckBox from "./ContentCheckBox.vue";
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    ContentList,
    ContentText,
    ContentCheckBox,
  },
};
</script>
<style lang=""></style>
