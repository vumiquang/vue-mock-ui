<template>
  <header class="header">
    <div class="header-wrap">
      <a href="#" class="logo">
        <img src="../../assets/logo.png" alt="" />
      </a>
      <ul class="menu">
        <li class="active"><a href="#">入社手続き</a></li>
        <li><a href="#">ヘルプ</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="css">
.header {
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(102, 102, 102, 0.24);
}
.header-wrap {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo {
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 23px;
  margin-right: 20px;
}
.logo img {
  height: 100%;
  width: auto;
}
.menu {
  display: flex;
  align-items: center;
  height: 100%;
}
.menu li {
  height: 100%;
  text-align: center;
}
.menu a {
  display: block;
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 62px;
  padding: 0 16px;
  position: relative;
  color: #999999;
}
.menu li.active a:after {
  background-color: #007bc3;
}
.menu li.active a {
  color: #333333;
}
.menu li a:after {
  content: "";
  display: block;
  height: 4px;
  background-color: transparent;
  border-radius: 6px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
