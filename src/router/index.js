import Vue from 'vue'
import Router from 'vue-router'
import CatalogueList from '@/components/CatalogueList'
import Catalogue from '@/components/Catalogue'
import Quizz from '@/components/Quizz'
import Administratouille from '@/components/Administratouille'
import AddTool from '@/components/AddTool';
import ToolDetail from '@/components/ToolDetail';
import ToolEdit from '@/components/ToolEdit';
import Login from '@/components/Login';
import firebase from '../Firebase';

Vue.use(Router)

const router =  new Router({
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
      component: Administratouille,
      meta : {
        auth: true
      }
    },
    {
      path: '/administratouille/add',
      name: 'AddTool',
      component: AddTool,
      meta : {
        auth: true
      }
    },
    {
      path: '/administratouille/detail/:id',
      name: 'ToolDetail',
      component: ToolDetail,
      meta : {
        auth: true
      }
    }, 
    {
      path: '/administratouille/edit/:id',
      name: 'ToolEdit',
      component: ToolEdit,
      meta : {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
})


router.beforeEach(async(to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  console.log("CURRENT USER",currentUser)
  const requiresAuth = to.matched.some(record => record.meta.auth);

  if(requiresAuth && !currentUser ){
    next('login');
  } 
  else {
    next();
  } 
});

export default router;

