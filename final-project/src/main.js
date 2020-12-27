import Vue from 'vue'
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import router from './router';
import i18n from './i18n';

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
