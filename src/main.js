// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, BNav, BCard, BFormRadioGroup, BFormRadio, BProgress, BIconArrowRepeat, BModal } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.component('b-nav', BNav)
Vue.component('b-card', BCard)
Vue.component('b-form-radio-group', BFormRadioGroup)
Vue.component('b-form-radio', BFormRadio)
Vue.component('b-progress', BProgress)
Vue.component('BIconArrowRepeat', BIconArrowRepeat)
Vue.component('b-modal', BModal);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
