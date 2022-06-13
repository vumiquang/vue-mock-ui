<template lang="">
  <Layout>
    <template v-slot:header>
      <HeaderTop></HeaderTop>
    </template>
    <template v-slot:default>
      <Form></Form>
    </template>
  </Layout>
</template>
<script>
import Layout from "./layout";
import HeaderTop from "./components/HeaderTop";
import Form from "./components/Form";

export default {
  components: {
    Layout,
    HeaderTop,
    Form,
  },
};
</script>
<style lang=""></style>
