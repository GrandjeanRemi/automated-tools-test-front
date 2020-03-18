<template>
  <b-container class="container" >
    <b-row class="justify-content-center" >
      <b-col>
        <div class="toolName" >
            <h1 id="idtoolname" v-for="tool in tools" v-bind:key="tool.id">
            <div v-if="id == tool.id">
              <img width="100" height="100" v-bind:src=tool.logo />
              {{tool.toolname}}
            </div>
            </h1>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="1">
        <div class="arrowleft visible" @click='gotoleft'>
          <vue-chevron
            :point-down="pointDown"
            :duration="duration"
            :thickness="thickness"
            :angle="angle"
            :round-edges="roundEdges"
          />
        </div>
      </b-col>
      <b-col xl="4">
        <div class="title">
          <span class="draw"> CARACTERISTIQUES</span>
        </div>
        <div class="toolCaract">
            <div class="content" v-for="tool in tools" v-bind:key="tool.id">
              <div v-for="(value, key) in tool.caract" v-bind:key="key">   
                <div v-if="id == tool.id">
                  <b>{{replaceKey(key)}}</b> : {{value}} 
                </div>
              </div>
              <div v-if="id == tool.id">
                <div class="weblink">
                  <a target="#blank" :href=tool.url>VOIR LE SITE</a>
                </div>
              </div>
            </div>
          </div> 
        </b-col> 
        <b-col xl="4">
          <div class="title">
            COMPATIBILITE
          </div>
        <div class="compatibilite">
            <div class="content" v-for="tool in tools" v-bind:key="tool.id">
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
                    <div class="compatibilitetools" v-if="key === 'Jira'">
                        <img class="compatibilitetoolsimg"  src="../assets/img/jira.png"/>
                        <div class="compatibilitetoolsvalue" v-if="value === 'Oui'">
                          <img width="50" height="50" src="../assets/img/tick.png"/> 
                        </div>
                        <div class="compatibilitetoolsvalue" v-if="value === 'Non'">
                          <img width="43" height="43" src="../assets/img/quit.png"/> 
                        </div>   
                    </div>
                    <div class="compatibilitetools" v-if="key === 'Xray'">
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
      </b-col>
      <b-col xs="1">
        <div class="arrowright visible" @click='gotoright'>
          <vue-chevron
            :point-down="pointDown"
            :duration="duration"
            :thickness="thickness"
            :angle="angle"
            :round-edges="roundEdges"
          />
        </div>
      </b-col>
      </b-row> 
      <div class="fleches">
        <b-row class="justify-content-center">
          <div class="arrowleft gauche" @click='gotoleft'>
            <vue-chevron
              :point-down="pointDown"
              :duration="duration"
              :thickness="thickness"
              :angle="angle"
              :round-edges="roundEdges"
            />
          </div>
          <div class="arrowright droite" @click='gotoright'>
            <vue-chevron
              :point-down="pointDown"
              :duration="duration"
              :thickness="thickness"
              :angle="angle"
              :round-edges="roundEdges"
            />
          </div>
        </b-row>
      </div>
    
  </b-container>
</template>


<script>
import Tools from '../assets/tools.json'
import VueChevron from 'vue-chevron'
import firebase from '../Firebase.js'

export default {
  components: {
    VueChevron
  },
  data () {
    return {
      ref: firebase.firestore().collection('tools'),
      id: this.$route.params.id,  
      tools : [],
      pointDown: false,
      thickness: 10,
      duration: 300,
      angle: 42,
      roundEdges: true,
      easing: function n(t){return t}
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.tools = [];
      querySnapshot.forEach((doc) => {
        this.tools.push({
          id: doc.data().id,
          toolname: doc.data().toolname,
          url: doc.data().url,
          logo: doc.data().logo,
          description: doc.data().description,
          caract: doc.data().caract,
          compatibilite: doc.data().compatibilite
        });
      });
    });
  },
  methods: {
    gotoright () {
      if(this.id <= this.tools.length-1) {
        this.$router.push({ name: 'Catalogue', params: { id: parseInt(this.id) + 1 } })
        this.id = this.$route.params.id      
      }else{
        this.id = 1
        this.$router.push({ name: 'Catalogue', params: { id: parseInt(this.id) } })
      }
    },
    gotoleft () {
      if(this.id > 1) {  
        this.$router.push({ name: 'Catalogue', params: { id: parseInt(this.id) - 1 } })
        this.id = this.$route.params.id
     }else{
       this.id = this.tools.length
       this.$router.push({ name: 'Catalogue', params: { id: parseInt(this.id) } })
     }
    },
    replaceKey(key){
       return key.replace(/_/g,' ');
    }
  },
  computed: {},
  mounted () {
    if(this.id > this.tools.length ||  /[^0-9]/.test(this.id)) {      
      this.id = 1
      this.$router.push({ name: 'Catalogue', params: { id: parseInt(this.id) } })
    }
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-weight: bold;
  font-size:6vw;
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

.toolName{
  margin-bottom:5%;
  margin-top:1%;
}

.toolCaract{
  color:#7b7992;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  border-radius: 25px;
  line-height:28px;
  text-align:left;
  height:650px;
  margin-bottom:5%;
  padding-bottom:25px;
  padding-right:25px;
  padding-left:25px;
  padding-bottom:25px;
  margin-bottom:20px;
  padding-top:5%;
}

.compatibilite{
  color:#7b7992;
  height:650px;
  text-align:center;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  border-radius: 25px;
  padding-right:25px;
  padding-left:25px;
  padding-bottom:25px;
  margin-bottom:20px;
  padding-top:5%;
}
.compatibilitetools .compatibilitetoolsimg{
  float:left;
  width:35%;
  margin: auto;
}
.compatibilitetools .compatibilitetoolsvalue{
  margin-left:50%;
  margin: auto;
}
.compatibilitetools{
  display:flex;
}
.title{
  background: none;
  box-sizing: border-box;
  padding-top: 0.8em;
  border-radius: 25px;
  box-shadow: inset 0 0 0 1px #f45e61;
  color: white;
  font-size: 20px;
  height:60px;
  text-align:center;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  margin-bottom:20px;
}
.arrowright.visible {
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

.arrowleft.visible{
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
  margin-top:8%;
}
.weblink a {
  color:white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
}
@media screen and (max-width: 1200px) {
  .fleches {
    position:relative;
    color: #000000;
    font-size: 150px;
  }
  .arrowleft.gauche{ 
    transform: rotate(-90deg);
    width:1em;
    height:1em;
    transition-duration: .3s;
  }
    .arrowright.droite{ 
    transform: rotate(90deg);
    width:1em;
    height:1em;
    transition-duration: .3s;
  }
  .visible{
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .fleches {
    display:none;
  }
}

</style>
