import Vue from 'vue'
import Router from "vue-router";
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import ButtonComponent from "../src/components/Button/ButtonComponent.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: ButtonComponent }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')