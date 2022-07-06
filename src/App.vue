<template>
  <div>
    <MyHeader title="666" backgroundColor="hotpink"></MyHeader>
    <div style="margin-top: 45px">
      <MyGoods v-for="item in list" :key="item.id" :obj="item"></MyGoods>
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
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  created() {
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
      console.log(this.list);
    });
  },
};
</script>

<style>
</style>
