<template>
  <div>
    <MyHeader></MyHeader>
    <div style="margin-top: 45px">
      <MyGoods></MyGoods>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
};
</script>

<style>
</style>
