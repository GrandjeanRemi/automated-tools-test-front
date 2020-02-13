import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Catalogue from '@/components/Catalogue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/catalogue/:id',
      name: 'Catalogue',
      component: Catalogue
    }
  ]
})
