<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Ajouter outil
        <b-link href="#/">Liste d'outils</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Nom de l'outil">
            <b-form-input id="toolname" v-model.trim="tool.toolname"></b-form-input>
          </b-form-group>
          
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Type">
            <b-form-input id="Type" v-model.trim="tool.caract.Type"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Web App">
            <b-form-input id="WebApp" v-model.trim="tool.caract.Web_app"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Api Webservices">
            <b-form-input id="ApiWebservices" v-model.trim="tool.caract.API_Webservices"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Desktop App">
            <b-form-input id="DesktopApp" v-model.trim="tool.caract.Desktop_app"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Mobile App">
            <b-form-input id="MobileApp" v-model.trim="tool.caract.Mobile_app"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Base de donnee">
            <b-form-input id="BaseDeDonnee" v-model.trim="tool.caract.Base_de_donnee"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Langage">
            <b-form-input id="langage" v-model.trim="tool.caract.Langage"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Niveau de programmation">
            <b-form-input id="NiveauDeProgrammation" v-model.trim="tool.caract.Niveau_de_programmation"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Type de test">
            <b-form-input id="Type_de_test" v-model.trim="tool.caract.Type_de_test"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Technique de Test">
            <b-form-input id="TechniqueDeTest" v-model.trim="tool.caract.Technique_de_test"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Import Export">
            <b-form-input id="Import_Export" v-model.trim="tool.caract.Import_Export"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Documentation">
            <b-form-input id="documentation" v-model.trim="tool.caract.Documentation"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Licence">
            <b-form-input id="Licence" v-model.trim="tool.caract.Licence"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Support">
            <b-form-input id="support" v-model.trim="tool.caract.support"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Prix">
            <b-form-input id="prix" v-model.trim="tool.caract.Prix"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Jenkins">
            <b-form-input id="jenkins" v-model.trim="tool.compatibilite.Jenkins"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Gitlab">
            <b-form-input id="gitlab" v-model.trim="tool.compatibilite.Gitlab"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Cucumber">
            <b-form-input id="cucumber" v-model.trim="tool.compatibilite.Cucumber"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Jira">
            <b-form-input id="jira" v-model.trim="tool.compatibilite.Jira"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Xray">
            <b-form-input id="xray" v-model.trim="tool.compatibilite.Xray"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Github">
            <b-form-input id="github" v-model.trim="tool.compatibilite.Github"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Url">
            <b-form-input id="url" v-model.trim="tool.url"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="logo">
            <b-form-input id="logo" v-model.trim="tool.logo"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Description">
              <b-form-textarea id="description"
                         v-model="tool.description"
                         placeholder="Ecrivez quelque chose"
                         :rows="2"
                         :max-rows="6">{{tool.description}}</b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase';
let test = firebase.firestore().collection('tools');
export default {
  name: 'Administratouille',
  data() {
      return {
          ref: firebase.firestore().collection('tools'),
          tool: {
            caract: {},
            compatibilite: {}
          }
      }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      
      this.ref.add(this.tool).then((docRef) => {
        this.tool.toolname = '';

        this.tool.caract.Type = '';
        this.tool.caract.Web_app = '';
        this.tool.caract.API_Webservices = '';
        this.tool.caract.Desktop_app = '';
        this.tool.caract.Mobile_app = '';
        this.tool.caract.Base_de_donnee = '';
        this.tool.caract.Langage = '';
        this.tool.caract.Niveau_de_programmation = '';
        this.tool.caract.Type_de_test = '';
        this.tool.caract.Technique_de_test = '';
        this.tool.caract.Import_Export = '';
        this.tool.caract.Documentation = '';                
        this.tool.caract.Licence = '';
        this.tool.caract.Support = '';
        this.tool.caract.Prix = '';

        this.tool.compatibilite.Jenkins = '';
        this.tool.compatibilite.Gitlab = '';
        this.tool.compatibilite.Cucumber = '';
        this.tool.compatibilite.Jira = '';
        this.tool.compatibilite.Xray = '';
        this.tool.compatibilite.Github = '';

        this.tool.url = '';
        this.tool.logo = '';
        this.tool.description = ''
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>