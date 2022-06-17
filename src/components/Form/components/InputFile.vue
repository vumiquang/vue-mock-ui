<template lang="">
  <div class="input-file">
    <Label
      :tag="getTagLabel"
      :labelName="data.label"
      :labelNote="data.labelNote"
      :subTag="data.selectOne ? 'どちらか' : ''"
      :disabled="data.disabled"
    >
      <label>
        <input
          type="file"
          class="input"
          v-on:change="onFileChange"
          accept=".xlsx, .xls, .csv, .pdf, .docx"
        />
        <div class="file-select" v-show="fileName !== ''">{{ fileName }}</div>
        <div
          class="holder"
          @drop="dropFile($event)"
          @dragover="dragOver($event)"
          v-show="fileName === ''"
        >
          <img src="../../../assets/upload.png" />
          <p class="bold">ファイルをドラッグ</p>
          <p>ドロップ ファイルをドロップするか、</p>
          <p>ファイルを参照する</p>
        </div>
      </label>
    </Label>
  </div>
</template>
<script>
import mixinsInput from "../mixins/mixins-input";
import Label from "./Label.vue";

export default {
  data() {
    return { file: "", fileName: "" };
  },
  components: {
    Label,
  },
  mixins: [mixinsInput],
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createFile(files[0]);
    },
    createFile(file) {
      let reader = new FileReader();
      let vm = this;
      vm.fileName = file.name;
      console.log(file);
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        vm.file = e.target.result;
      };
    },
    dropFile(e) {
      e.preventDefault();
      this.onFileChange(e);
    },
    dragOver(e) {
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
.input-file {
  margin-bottom: 25px;
}
.input {
  display: none;
}
.holder {
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 27px;
    height: auto;
    margin-bottom: 4px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
  .bold {
    font-weight: 700;
  }
}
.file-select {
  background: #ffffff;
  border: 1px solid #333333;
  padding: 15px 10px;
  width: fit-content;
  margin: 0 auto;
  font-size: 32px;
  color: #333333;
}
</style>
