<template lang="">
  <div class="form-progress">
    <div class="progress-wrap">
      <div class="progress-step active">
        <div class="progress-group">
          <img src="../../assets/tick-blue-icon.png" alt="" class="icon" />
        </div>
      </div>
      <div class="progress-step active finish">
        <div class="progress-group">
          <img src="../../assets/pencil-white-icon.png" alt="" class="icon" />
          <img src="../../assets/pencil-blue-icon.png" alt="icon finish" />
        </div>
      </div>
      <div class="progress-step">
        <div class="progress-group">
          <img src="../../assets/tick-white-icon.png" alt="" class="icon" />
          <img
            src="../../assets/tick-blue-icon.png"
            alt=""
            class="icon finish"
          />
        </div>
      </div>
      <div class="progress-step">
        <div class="progress-group">
          <img src="../../assets/tick-white-icon.png" alt="" class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.progress-step .icon {
  display: block;
  max-width: 35px;
  max-height: 35px;
}
.progress-step .icon.finish {
  display: none;
}
.progress-step.finish .icon {
  display: none;
}
.progress-step.finish .icon.finish {
  display: block;
}
.progress-step.active .progress-group {
  background-color: #b2b1ff;
}
</style>
