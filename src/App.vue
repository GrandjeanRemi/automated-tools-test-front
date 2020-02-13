<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Catalogue from './components/Catalogue';
export default {
  name: 'App',
  components : {
    Catalogue
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
#app {
  font-family: 'Questrial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
}
</style>
