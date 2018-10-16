import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnnouncer from "vue-announcer";
import VueAxe from "vue-axe";

Vue.config.productionTip = false;

Vue.use(VueAxe, {
  config: {
    rules: [
      { id: 'heading-order', enabled: true },
      { id: 'label-title-only', enabled: true },
      { id: 'link-in-text-block', enabled: true },
      { id: 'region', enabled: true },
      { id: 'skip-link', enabled: true },
      { id: 'help-same-as-label', enabled: true }
    ]
  }
})

Vue.use(VueAnnouncer, {
  complementRoute: 'is ready!',
}, router);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
