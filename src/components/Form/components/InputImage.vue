<template lang="">
  <Label
    :tag="getTagLabel"
    :labelName="data.label"
    :labelNote="data.labelNote"
    :subTag="data.selectOne ? 'どちらか' : ''"
    :disabled="data.disabled"
  >
    <label class="input-image">
      <div class="previewImage" v-show="image !== ''">
        <div class="wrap-image">
          <img :src="image" />
        </div>
      </div>

      <input
        type="file"
        class="input"
        accept="image/*"
        v-on:change="onImageChange"
      />
      <div
        class="holder"
        @drop="dropFile($event)"
        @dragover="dragOver($event)"
        v-show="showDrop"
      >
        <img src="../../../assets/upload.png" />
        <p class="bold">ファイルをドラッグ</p>
        <p>ドロップ ファイルをドロップするか、</p>
        <p>ファイルを参照する</p>
      </div>
    </label>
  </Label>
</template>
<script>
import mixinsInput from "../mixins/mixins-input";
import Label from "./Label.vue";
export default {
  data() {
    return { image: "" };
  },
  components: {
    Label,
  },
  mixins: [mixinsInput],
  computed: {
    showDrop() {
      if (this.data.showDrop) return true;
      else if (!this.data.showDrop && this.image !== "") return false;
      else return true;
    },
  },
  watch: {
    image() {
      console.log(this.data.showDrop, !this.image || this.data.showDrop);
    },
  },
  methods: {
    onImageChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
    },
    dropFile(e) {
      e.preventDefault();
      this.onImageChange(e);
    },
    dragOver(e) {
      e.preventDefault();
    },
  },
};
</script>
<style lang="scss" scoped>
.input-image {
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
.previewImage {
  margin: 0 auto;
  width: 120px;
  .wrap-image {
    padding-top: calc(100% * 16 / 12);
    position: relative;
    margin-bottom: 24px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
