import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import doetnv from "dotenv"

Vue.config.productionTip = false;
doetnv.config()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
