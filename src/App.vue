<template>
  <div id="app">
    <div class="navbar">
      <b-nav>
        <b-nav-item href="/">Catalogue</b-nav-item>
        <b-nav-item href="/questionnaire">Choisir mon outil</b-nav-item>
        <b-nav-item href="/login">Se connecter</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import Catalogue from './components/Catalogue'
import Quizz from './components/Quizz'
import CatalogueList from './components/CatalogueList'
import Administratouille from './components/Administratouille';
import ToolList from './components/ToolList';
import AddTool from './components/AddTool';
import ToolDetail from './components/ToolDetail';
import ToolEdit from './components/ToolEdit';
import Login from './components/Login';

export default {
  name: 'App',
  components: {
    Catalogue,
    Quizz,
    CatalogueList,
    Administratouille,
    ToolList,
    AddTool,
    ToolDetail,
    ToolEdit,
    Login
  },
  methods: {}
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Questrial&display=swap");
#app {
  font-family: "Questrial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
body {
  background-color: white;
  margin: 0;
}
.navbar {
  box-shadow: 0px 30px 80px rgba(34, 35, 58, 0.2);
  background-image: linear-gradient(147deg, #fdfbfb 0%, #ebedee 74%);
  top: 0;
  position: fixed;
  z-index: 9999;
  width: 100%;
}
.nav-item > a {
  color : #fe8a39 !important;
}
.nav-item > a:hover {
  color : #fd3838 !important;
}
.row{
  margin-right: 0px !important;
  margin-left: 0px !important;
}
</style>
