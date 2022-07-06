import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.css";

// 引入axios
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
