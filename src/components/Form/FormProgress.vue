<template lang="">
  <div class="form-progress">
    <div class="progress-wrap">
      <div
        v-for="index in 5"
        :key="index"
        class="progress-step"
        :class="activeClass(index)"
      >
        <div v-if="index % 2 !== 0">
          <div class="progress-group">
            <img
              src="../../assets/tick-white-icon.png"
              alt=""
              class="icon white tick"
            />
            <img
              src="../../assets/tick-blue-icon.png"
              alt=""
              class="icon blue tick"
            />
          </div>
        </div>
        <div v-else>
          <div class="progress-group">
            <img
              src="../../assets/pencil-white-icon.png"
              alt=""
              class="icon white edit"
            />
            <img
              src="../../assets/pencil-blue-icon.png"
              class="icon blue edit"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
  methods: {
    activeClass(index) {
      index = index - 1;
      let curStep = this.$store.getters.getCurrentStep;
      let isCurFormFish = this.$store.getters.isCurrentFormFinish;
      let finishStatus = false;
      let activeStatus = curStep >= index;
      if (isCurFormFish) finishStatus = true;
      else if (curStep > index) finishStatus = true;
      else finishStatus = false;

      return {
        active: activeStatus,
        finish: finishStatus,
      };
    },
  },
};
</script>

<style lang="css">
.form-progress {
  margin-bottom: 30px;
}
.progress-wrap {
  display: flex;
  justify-content: space-between;
}
.progress-step ~ .progress-step {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.progress-step ~ .progress-step:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 100%;
  left: 0;
  height: 1px;
  background-color: #dcdcdc;
  z-index: -1;
}
.progress-step.active:after {
  background-color: #b2b1ff;
}
.progress-group {
  width: 40px;
  height: 40px;
  border-radius: 999rem;
  background-color: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.progress-step.active .progress-group {
  background-color: #b2b1ff;
}
.progress-step .icon {
  max-width: 35px;
  max-height: 35px;
}
.progress-step .icon.blue {
  display: none;
}
.progress-step.active .icon.tick.white {
  display: none;
}
.progress-step.active .icon.tick.blue {
  display: block;
}
.progress-step.finish .icon.edit.white {
  display: none ;
}
.progress-step.finish .icon.edit.blue {
  display: block;
}
</style>
