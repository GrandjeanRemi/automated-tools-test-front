import Vue from 'vue'
import Router from 'vue-router'
import CatalogueList from '@/components/CatalogueList'
import Catalogue from '@/components/Catalogue'
import Quizz from '@/components/Quizz'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CatalogueList',
      component: CatalogueList
    },
    {
      path: '/catalogue/:id',
      name: 'Catalogue',
      component: Catalogue
    },
    {
      path: '/catalogue', 
      redirect: '/catalogue/1'
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Quizz
    }
  ]
})
