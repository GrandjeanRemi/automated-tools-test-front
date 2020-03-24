<template>
  <div>
    <b-container class="container">
      <b-progress :value="value" variant="warning" :striped="striped" class="mt-2"></b-progress>
      <p id="aucun" class="aucun">Malheureusement, aucun outil ne correspond à votre besoin</p>
      <h1 id="mesoutils" class="mesoutils">Mes outils :</h1>
      <b-row class="justify-content-md-center">
        <div
          class="choix"
          id="questionnaire"
          v-for="question in questions"
          v-bind:key="question.id"
        >
          <div v-if="id == question.id">
            <b-form-group :label="question.titre">
              <div v-if="question.reponse1 != ''">
                <b-form-radio
                  button="button"
                  button-variant="outline-secondary"
                  size="md"
                  v-model="selected"
                  class="radiobouton"
                  name="some-radios"
                  :value="question.reponse1"
                >{{question.reponse1}}</b-form-radio>
              </div>
              <div v-if="question.reponse2 != ''">
                <b-form-radio
                  button="button"
                  button-variant="outline-secondary"
                  size="md"
                  v-model="selected"
                  class="radiobouton"
                  name="some-radios"
                  :value="question.reponse2"
                >{{question.reponse2}}</b-form-radio>
              </div>
              <div v-if="question.reponse3 != ''">
                <b-form-radio
                  button="button"
                  button-variant="outline-secondary"
                  size="md"
                  v-model="selected"
                  class="radiobouton"
                  name="some-radios"
                  :value="question.reponse3"
                >{{question.reponse3}}</b-form-radio>
              </div>
              <div v-if="question.reponse4 != ''">
                <b-form-radio
                  button="button"
                  button-variant="outline-secondary"
                  size="md"
                  v-model="selected"
                  class="radiobouton"
                  name="some-radios"
                  :value="question.reponse4"
                >{{question.reponse4}}</b-form-radio>
              </div>
              <div v-if="question.reponse5 != ''">
                <b-form-radio
                  button="button"
                  button-variant="outline-secondary"
                  size="md"
                  v-model="selected"
                  class="radiobouton"
                  name="some-radios"
                  :value="question.reponse5"
                >{{question.reponse5}}</b-form-radio>
              </div>
            </b-form-group>
          </div>
        </div>
      </b-row>
      <b-row class="justify-content-md-center">
        <div id="buttons">
          <b-button id="boutonSuivant" class="bouton" @click="questionSuivante">SUIVANT</b-button>
          <b-button
            id="boutonVoir"
            :disabled="isDisabled"
            class="bouton"
            @click="calculerResultat"
          >VOIR LES OUTILS</b-button>
        </div>
      </b-row>
      <b-row class="justify-content-md-center">
        <div id="liste" class="listeoutils" v-for="tool in this.tools" v-bind:key="tool.key">
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
                <h2>{{tool.toolname}}</h2>
                <b-card-text>{{tool.description}}</b-card-text>
                <b-button class="lienbouton" :href="'/catalogue/'+tool.key">En savoir plus</b-button>
              </div>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Quiz from '../assets/quiz.json'
import firebase from '../Firebase.js'
export default {
  data () {
    return {
      ref: firebase.firestore().collection('tools'),
      key: '',
      id: 1,
      tools: [],
      cpt: 0,
      questions: Quiz.questions,
      selected: '',
      disabled: 0,
      reponse: [],
      striped: true,
      value: 20
    }
  },
  created () {
    this.ref.onSnapshot(querySnapshot => {
      this.tools = []
      querySnapshot.forEach(doc => {
        this.tools.push({
          key: doc.id,
          toolname: doc.data().toolname,
          url: doc.data().url,
          logo: doc.data().logo,
          description: doc.data().description,
          caract: doc.data().caract,
          compatibilite: doc.data().compatibilite
        })
      })
    })
  },
  methods: {
    questionSuivante () {
      if (this.reponse.length === 0) {
        this.reponse.push(this.selected)
      } else {
        this.reponse[this.id - 1] = this.selected
      }
      if (this.id === this.questions.length) {
        document.getElementById('boutonSuivant').remove()
      }
      if (this.id < this.questions.length && this.id > 0 && this.value <= 100) {
        this.id = this.id + 1
        this.value = this.value + 20
      }
      this.cpt = this.cpt + 1
    },
    calculerResultat () {
      var filtercondition = [
        this.reponse[0],
        this.reponse[1],
        this.reponse[2],
        this.reponse[3],
        this.reponse[4]
      ]
      this.tools = this.tools.filter(function (obj) {
        if (filtercondition[0] != null) {
          if (filtercondition[0] === 'Une application Web') {
            if (obj.caract.Web_app !== 'Oui') {
              return false
            }
          }
          if (filtercondition[0] === 'Des API/Webservices') {
            if (obj.caract.API_Webservices !== 'Oui') {
              return false
            }
          }
          if (filtercondition[0] === 'Un client lourd') {
            if (obj.caract.Desktop_app !== 'Oui') {
              return false
            }
          }
          if (filtercondition[0] === 'Une application Mobile') {
            if (obj.caract.Mobile_app !== 'Oui') {
              return false
            }
          }
        }
        if (filtercondition[1] !== null) {
          if (filtercondition[1] === 'Une page web (multi-utilisateurs)') {
            if (obj.caract.Type !== 'Client web') {
              return false
            }
          }
          if (filtercondition[1] === 'Depuis mon poste (mono-utilisateur)') {
            if (obj.caract.Type !== 'Client lourd') {
              return false
            }
          }
        }
        if (filtercondition[2] !== null) {
          if (filtercondition[2] === 'Jenkins') {
            if (obj.compatibilite.Jenkins !== 'Oui') {
              return false
            }
          }
          if (filtercondition[2] === 'Gitlab') {
            if (obj.compatibilite.Gitlab !== 'Oui') {
              return false
            }
          }
          if (filtercondition[2] === 'Cucumber') {
            if (obj.compatibilite.Cucumber !== 'Oui') {
              return false
            }
          }
          if (filtercondition[2] === 'Jira') {
            if (obj.compatibilite.Jira !== 'Oui') {
              return false
            }
          }
          if (filtercondition[2] === 'Xray') {
            if (obj.compatibilite.Xray !== 'Oui') {
              return false
            }
          }
        }
        if (filtercondition[3] !== null) {
          if (filtercondition[3] !== obj.caract.Niveau_de_programmation) {
            return false
          }
        }
        if (filtercondition[4] !== null) {
          if (filtercondition[4] !== obj.caract.Prix) {
            return false
          }
        }
        return true
      })
      document.getElementById('boutonVoir').style.display = 'none'
      document.getElementsByClassName('choix')[document.getElementsByClassName('choix').length - 1].style.display = 'none'
      if (this.tools.length === 0) {
        document.getElementById('aucun').style.display = 'inherit'
      } else {
        document.getElementById('liste').style.display = 'inherit'
        document.getElementById('mesoutils').style.display = 'inherit'
      }
    }
  },
  computed: {
    isDisabled () {
      if (this.cpt < this.questions.length) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bouton {
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-align: center;
  cursor: pointer;
  border: none;
  margin-right: 10px;
}
.choix {
  font-size: 30px;
}
.container {
  margin-top: 10%;
}
.radiobouton {
  text-align: left;
}
.mt-2 {
  margin-bottom: 2%;
}
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
.enbas {
  margin: auto;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.card-title {
  flex-grow: 1;
}
.listeoutils {
  display: none;
}
.aucun {
  display: none;
}
.mesoutils {
  display: none;
}
</style>
