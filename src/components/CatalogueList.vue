<template>
  <div>
    <b-row class="justify-content-center filter">
      <b-col xl="2">
        <label class="titrefiltre">Rechercher</label>
        <b-form-input @change="filtrerParNom" v-model="text" aria-label="Input" class="mr-1"></b-form-input>
      </b-col>
      <b-col xl="2">
        <label class="titrefiltre">Type d'outil ?</label>
        <b-form-select @change="multiFiltre" v-model="selected" :options="options"></b-form-select>
      </b-col>
      <b-col xl="2">
        <label class="titrefiltre">Pour quel type d'application ?</label>
        <b-form-select @change="multiFiltre" v-model="selected2" :options="options2"></b-form-select>
      </b-col>
      <b-col xl="2">
        <label class="titrefiltre">Compatible avec ?</label>
        <b-form-select @change="multiFiltre" v-model="selected3" :options="options3"></b-form-select>
      </b-col>
      <b-col xl="2">
        <label class="titrefiltre">Niveau de développement ?</label>
        <b-form-select @change="multiFiltre" v-model="selected4" :options="options4"></b-form-select>
      </b-col>
      <b-col xl="2">
        <label class="titrefiltre">Gratuit ?</label>
        <b-form-select @change="multiFiltre" v-model="selected5" :options="options5"></b-form-select>
      </b-col>
    </b-row>
    <b-row class="justify-content-center listtools">
      <b-icon-arrow-repeat class="h1 mb-2 reset" @click="resetFiltre">></b-icon-arrow-repeat>
    </b-row>
    <b-row class="justify-content-center listtools">
      <div v-for="tool in this.tools" v-bind:key="tool.key">
        <b-col>
          <b-card
            title=" "
            :img-src="tool.logo"
            :img-alt="tool.toolname"
            img-top
            tag="card"
            style="max-width: 20rem;border-radius: 25px;padding-top:15%;box-shadow: 0px 5px 20px rgba(34, 35, 58, 0.2);height:400px;margin-left:2%;margin-bottom:3%;margin-top:5%;border-radius: 25px;"
            class="mb-2"
          >
            <div class="enbas">
              <h2 class="toolname">{{tool.toolname}}</h2>
              <b-card-text>{{tool.description}}</b-card-text>
              <router-link :to="{ name: 'Catalogue', params: { id: tool.key }}"><b-button class="lienbouton">En savoir plus</b-button></router-link>
            </div>
          </b-card>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import Quizz from "./Quizz";
import firebase from "../Firebase.js";

export default {
  components: {
    Quizz
  },
  data() {
    return {
      ref: firebase.firestore().collection("tools"),
      key: '',
      id: 1,
      tools: [],
      tmpTools: [],
      selected: null,
      selected2: null,
      selected3: null,
      selected4: null,
      selected5: null,
      text: "",
      options: [
        { value: null, text: "Tous" },
        { value: "Client web", text: "Client Web" },
        { value: "Client lourd", text: "Client lourd" }
      ],
      options2: [
        { value: null, text: "Tous" },
        { value: "Application Web", text: "Application Web" },
        { value: "Application Mobile", text: "Application Mobile" },
        { value: "Client Lourd", text: "Client Lourd" },
        { value: "API/Webservices", text: "API/Webservices" },
        { value: "Base de donnée", text: "Base de donnée" }
      ],
      options3: [
        { value: null, text: "Tous" },
        { value: "Jenkins", text: "Jenkins" },
        { value: "Gitlab", text: "Gitlab" },
        { value: "Github", text: "Github" },
        { value: "Jira", text: "Jira" },
        { value: "Xray", text: "Xray" }
      ],
      options4: [
        { value: null, text: "Peu importe" },
        { value: "Débutant", text: "Débutant" },
        { value: "Moyen", text: "Moyen" },
        { value: "Expert", text: "Expert" }
      ],
      options5: [
        { value: null, text: "Peu importe" },
        { value: "Gratuit", text: "Oui" },
        { value: "Payant", text: "Non" }
      ]
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.tools = [];
      querySnapshot.forEach(doc => {
        this.tools.push({
          key: doc.id,
          toolname: doc.data().toolname,
          url: doc.data().url,
          logo: doc.data().logo,
          description: doc.data().description,
          caract: doc.data().caract,
          compatibilite: doc.data().compatibilite
        });
        this.tmpTools.push({
          key: doc.id,
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
    returnTools(tools) {
      this.tools = tools;
    },
    resetFiltre() {
      this.selected = null;
      this.selected2 = null;
      this.selected3 = null;
      this.selected4 = null;
      this.selected5 = null;
      this.tools = this.tmpTools;
    },
    filtrerParNom() {
      this.tools = this.tmpTools;
      var sel = this.text;
      this.tools = this.tools.filter(function(txt) {
        return txt.toolname === sel;
      });
      if (sel === "") {
        this.tools = this.tmpTools;
      }
    },
    multiFiltre() {
      this.tools = this.tmpTools;
      var filtercondition = [
        this.selected,
        this.selected2,
        this.selected3,
        this.selected4,
        this.selected5
      ];
      this.tools = this.tools.filter(function(obj) {
        if (filtercondition[0] !== null) {
          if (filtercondition[0] !== obj.caract.Type) {
            return false;
          }
        }
        if (filtercondition[1] != null) {
          if (filtercondition[1] === "Application Web") {
            if (obj.caract.Web_app !== "Oui") {
              return false;
            }
          }
          if (filtercondition[1] === "API/Webservices") {
            if (obj.caract.API_Webservices !== "Oui") {
              return false;
            }
          }
          if (filtercondition[1] === "Client Lourd") {
            if (obj.caract.Desktop_app !== "Oui") {
              return false;
            }
          }
          if (filtercondition[1] === "Application Mobile") {
            if (obj.caract.Mobile_app !== "Oui") {
              return false;
            }
          }
          if (filtercondition[1] === "Base de donnée") {
            if (obj.caract.Base_de_donnée !== "Oui") {
              return false;
            }
          }
        }
        if (filtercondition[2] !== null) {
          if (filtercondition[2] === "Jenkins") {
            if (obj.compatibilite.Jenkins !== "Oui") {
              return false;
            }
          }
          if (filtercondition[2] === "Gitlab") {
            if (obj.compatibilite.Gitlab !== "Oui") {
              return false;
            }
          }
          if (filtercondition[2] === "Cucumber") {
            if (obj.compatibilite.Cucumber !== "Oui") {
              return false;
            }
          }
          if (filtercondition[2] === "Jira") {
            if (obj.compatibilite.Jira !== "Oui") {
              return false;
            }
          }
          if (filtercondition[2] === "Xray") {
            if (obj.compatibilite.Xray !== "Oui") {
              return false;
            }
          }
          if (filtercondition[2] === "Github") {
            if (obj.compatibilite.Github !== "Oui") {
              return false;
            }
          }
        }
        if (filtercondition[3] !== null) {
          if (filtercondition[3] !== obj.caract.Niveau_de_programmation) {
            return false;
          }
        }
        if (filtercondition[4] !== null) {
          if (filtercondition[4] !== obj.caract.Prix) {
            return false;
          }
        }
        return true;
      });
    }
  },
  computed: {},
  mounted () {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
.lienbouton {
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-align: center;
  cursor: pointer;
  border: none;
  margin: auto;
}
.lienbouton > a {
    color: white !important;
    text-decoration:none;
}
.filter {
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 1%;
}
.titrefiltre {
  float: left;
  font-weight: 700;
  font-size: 13px;
}
.reset {
  cursor: pointer;
}
.enbas {
  margin: auto;
  min-width:270px;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.card-title {
  flex-grow: 1;
}
.card-text{
    font-size: 13px;
    height:50px;
}
.toolname{
    position:absolute;
    bottom:47%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); 
}
</style>
