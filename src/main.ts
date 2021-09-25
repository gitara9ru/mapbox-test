import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import doetnv from "dotenv";
import VueSocialSharing from "vue-social-sharing";

// @ts-ignore
import css from "./assets/css/main.css";

import vuetify from "./plugins/vuetify";

Vue.use(VueSocialSharing);
Vue.config.productionTip = false;
doetnv.config();

new Vue({
  router,
  store,
  // @ts-ignore
  css,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
