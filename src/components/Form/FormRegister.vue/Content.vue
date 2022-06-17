<template v-for="(control, index) in field">
  <div>
    <Title v-if="control.type === 'title'" :data="control"></Title>
    <InputText
      v-else-if="control.type === 'input-text'"
      :data="control"
    ></InputText>
    <InputImage
      v-else-if="control.type === 'input-image'"
      :data="control"
    ></InputImage>
    <InputFile
      v-else-if="control.type === 'input-file'"
      :data="control"
    ></InputFile>
    <InputRadio
      v-else-if="control.type === 'input-radio'"
      :data="control"
    ></InputRadio>
    <InputBirthDay
      v-else-if="control.type === 'input-single-date'"
      :data="control"
    ></InputBirthDay>
    <InputDate
      v-else-if="control.type === 'input-date'"
      :data="control"
    ></InputDate>
  </div>
</template>
<script>
import Title from "../components/Title.vue";
import InputText from "../components/InputText.vue";
import InputImage from "../components/InputImage.vue";
import InputFile from "../components/InputFile.vue";
import InputRadio from "../components/InputRadio.vue";
import InputBirthDay from "../components/InputBirthDay.vue";
import InputDate from "../components/InputDate.vue";
export default {
  props: {
    control: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Title,
    InputText,
    InputImage,
    InputFile,
    InputRadio,
    InputBirthDay,
    InputDate,
  },
};
</script>
<style lang=""></style>
