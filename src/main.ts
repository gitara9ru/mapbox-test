import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import doetnv from "dotenv";

// @ts-ignore
import css from "./assets/css/main.css";

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
doetnv.config();

new Vue({
  router,
  store,
  css,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
