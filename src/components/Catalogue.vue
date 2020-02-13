<template>
  <div  class="container" >  
    <div v-for="tool in tools" v-bind:key="tool.id">
        <div v-if="id == tool.id">
          <img width="200" height="200" :src=tool.logo>
        </div>
      </div>
     <div class="toolName" >
      <center>
      <h1 id="idtoolname" v-for="tool in tools" v-bind:key="tool.id">
      <div v-if="id == tool.id">
       {{tool.toolname}}
      </div>
      </h1>
      </center>
    </div>
    <div class="toolspec">
      <div class="columnleft">
        <div class="toolCaract">
          <h2><b><center>CARACTERISTIQUES</center></b></h2>
              <div v-for="tool in tools" v-bind:key="tool.id">
                  <div v-for="(value, key) in tool.caract" v-bind:key="key">   
                    <div v-if="id == tool.id">
                    <b>{{key}}</b> : {{value}} 
                    </div>
                  </div>
                  <div v-if="id == tool.id">
                    <div class="weblink">
                      <a target="#blank" :href=tool.url>VOIR LE SITE</a>
                    </div>
                  </div>
              </div>
        </div>
      </div>
      <div class="columnright">   
        <div class="compatibilite">
            <p><b>COMPATIBILITE</b></p>
            <div v-for="tool in tools" v-bind:key="tool.id">
                <div v-for="(value, key) in tool.compatibilite" v-bind:key="key">   
                  <div v-if="id == tool.id">
                    <div class="compatibilitetools" v-if="key === 'Gitlab'">
                      <img class="compatibilitetoolsimg"  src="../assets/img/gitlab-logo.png"/> 
                      <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                        <img width="50" height="50" src="../assets/img/tick.png"/> 
                      </div>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                        <img width="43" height="43" src="../assets/img/quit.png"/> 
                      </div>
                    </div>
                    <div class="compatibilitetools" v-if="key === 'Jenkins'">
                      <img class="compatibilitetoolsimg"   src="../assets/img/jenkinslogo.png"/>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                        <img width="50" height="50" src="../assets/img/tick.png"/> 
                      </div> 
                      <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                        <img width="43" height="43" src="../assets/img/quit.png"/> 
                      </div>                     
                    </div>
                    <div class="compatibilitetools" v-if="key === 'Cucumber'">
                      <img class="compatibilitetoolsimg" src="../assets/img/cucumber-logo.png"/>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                        <img width="50" height="50" src="../assets/img/tick.png"/> 
                      </div>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                        <img width="43" height="43" src="../assets/img/quit.png"/> 
                      </div>                      
                    </div>
                    <div class="compatibilitetools" v-if="key === 'Github'">
                      <img class="compatibilitetoolsimg"  src="../assets/img/github.png"/>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                        <img width="50" height="50" src="../assets/img/tick.png"/> 
                      </div>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                        <img width="43" height="43" src="../assets/img/quit.png"/> 
                      </div>                      
                    </div>
                    <div class="compatibilitetools" v-if="key === 'JiraXray'">
                      <img class="compatibilitetoolsimg"  src="../assets/img/xraylogo.png"/>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                        <img width="50" height="50" src="../assets/img/tick.png"/> 
                      </div>
                      <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                        <img width="43" height="43" src="../assets/img/quit.png"/> 
                      </div>                      
                    </div><hr>                   
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
      <div class="arrowright" @click='gotoright'>
        <vue-chevron
          :point-down="pointDown"
          :duration="duration"
          :thickness="thickness"
          :angle="angle"
          :round-edges="roundEdges"
        />
      </div>
      <div class="arrowleft" @click='gotoleft'>
        <vue-chevron
          :point-down="pointDown"
          :duration="duration"
          :thickness="thickness"
          :angle="angle"
          :round-edges="roundEdges"
        />
      </div>   
  </div>
</template>

<script>
import Tools from '../assets/tools.json'
import VueChevron from 'vue-chevron';

export default {
  components: {
    VueChevron
  },
  data () {
    return {
      id: 1,
      tools: Tools.tools,
      pointDown: false,
      thickness: 10,
      duration: 300,
      angle: 42,
      roundEdges: true,
      easing: function n(t){return t}
    }
  },
  methods: {
    gotoright () {
      if(this.id <= this.tools.length-1) {
        this.$router.push({ name: 'Catalogue', params: { id: this.id + 1 } })
        this.id = this.$route.params.id      
      }else{
        this.id = 1
        this.$router.push({ name: 'Catalogue', params: { id: this.id } })
      }
    },
    gotoleft () {
      if(this.id > 1) {  
        this.$router.push({ name: 'Catalogue', params: { id: this.id - 1 } })
        this.id = this.$route.params.id
     }     
    }
  },
  computed: {},
  mounted () {
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-weight: bold;
  font-size:100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr{
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
.toolspec{
  color:#7b7992;
}
.columnleft{
  position:relative;
  float:left;
  margin-left:25%;
}
.columnright{
  position:relative;
  float:right;
  margin-right:25%;
  
}
.toolCaract{
  float:left;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height:600px;
  line-height:28px;
  text-align:left;
}

.compatibilite{
  float:right;
  text-align:center;
  font-size:25px;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  width:250px;
  height:600px;
}
.compatibilitetools .compatibilitetoolsimg{
  float:left;
  width:45%;
  margin: auto;
}
.compatibilitetools .compatibilitetoolsvalue{
  margin-left:60%;
  margin: auto;
}
.compatibilitetools{
  display:flex;
}
.arrowright {
  color: #000000;
  font-size: 150px;
  position:absolute;
  top:50%;
  right:0;
  margin-right:5%;
  transform: rotate(90deg);
  width:1em;
  height:1em;
  transition-duration: .3s;
}

.arrowright:hover {
  transform: scale(1.1) rotate(90deg);
}

.arrowleft{
  color: #000000;
  font-size: 150px;
  position:absolute;
  margin-left:5%;
  top:50%;
  left:0;
  transform: rotate(-90deg);
  width:1em;
  height:1em;
  transition-duration: .3s;
}
.arrowleft:hover {
  transform: scale(1.1) rotate(-90deg);
}
.weblink{
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  justify-content: center;
  text-align: center;
  cursor:pointer;
  margin-top:15%;
}
.weblink a {
  color:white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>
