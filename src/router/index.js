import Vue from 'vue'
import Router from 'vue-router'
import CatalogueList from '@/components/CatalogueList'
import Catalogue from '@/components/Catalogue'
import Quizz from '@/components/Quizz'
import Administratouille from '@/components/Administratouille'
import AddTool from '@/components/AddTool';
import ToolDetail from '@/components/ToolDetail';

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
    },
    {
      path: '/administratouille',
      name: 'Administratouille',
      component: Administratouille
    },
    {
      path: '/administratouille/add',
      name: 'AddTool',
      component: AddTool
    },
    {
      path: '/administratouille/detail/:id',
      name: 'ToolDetail',
      component: ToolDetail
    }
  ]
})
