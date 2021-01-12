import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueJsonToCsv from "vue-json-to-csv";
import VuePapaParse from "vue-papa-parse";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueJsonToCsv,
  VuePapaParse,
  render: (h) => h(App),
}).$mount("#app");
