<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Ajouter outil
        <b-link href="/administratouille">Liste d'outils</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nom de l'outil"
            required
          >
            <b-form-input id="toolname" v-model.trim="tool.toolname"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldsetHorizontal"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Type"
            required
          >
            <b-form-select v-model.trim="tool.caract.Type" :options="types"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Web App"
          >
          <b-form-select v-model.trim="tool.caract.Web_app" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Api Webservices"
          >
            <b-form-select v-model.trim="tool.caract.API_Webservices" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Desktop App"
          >
            <b-form-select v-model.trim="tool.caract.Desktop_app" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Mobile App"
          >
            <b-form-select v-model.trim="tool.caract.Mobile_app" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Base de donnee"
          >
            <b-form-select v-model.trim="tool.caract.Base_de_donnee" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Langage"
          >
            <b-form-input id="langage" v-model.trim="tool.caract.Langage"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Niveau de programmation"
          >
            <b-form-select v-model.trim="tool.caract.Niveau_de_programmation" :options="programLevel"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Type de test"
          >
            <b-form-select v-model.trim="tool.caract.Type_de_test" :options="Type_test"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Technique de Test"
          >
            <b-form-input id="TechniqueDeTest" v-model.trim="tool.caract.Technique_de_test"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Import Export"
          >
            <b-form-select v-model.trim="tool.caract.Import_Export" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Documentation"
          >
            <b-form-input id="documentation" v-model.trim="tool.caract.Documentation"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Licence"
          >
            <b-form-input id="Licence" v-model.trim="tool.caract.Licence"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Support"
          >
            <b-form-input id="support" v-model.trim="tool.caract.support"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Prix"
          >
            <b-form-select v-model.trim="tool.caract.Prix" :options="price"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Jenkins"
          >
            <b-form-select v-model.trim="tool.compatibilite.Jenkins" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Gitlab"
          >
            <b-form-select v-model.trim="tool.compatibilite.Gitlab" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Cucumber"
          >
            <b-form-select v-model.trim="tool.compatibilite.Cucumber" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Jira"
          >
            <b-form-select v-model.trim="tool.compatibilite.Jira" :options="options"></b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Xray"
          >
            <b-form-select v-model.trim="tool.compatibilite.Xray" :options="options"></b-form-select>
          </b-form-group>
        <b-form-group
          id="fieldsetHorizontal"
          required
          horizontal
          :label-cols="4"
          breakpoint="md"
          label="Github"
          >
          <b-form-select v-model.trim="tool.compatibilite.Github" :options="options"></b-form-select>
        </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Url"
          >
            <b-form-input id="url" v-model.trim="tool.url"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="logo"
          >
            <b-form-input id="logo" v-model.trim="tool.logo"></b-form-input>
          </b-form-group>
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Description"
          >
            <b-form-textarea
              id="description"
              required
              v-model="tool.description"
              placeholder="Ecrivez quelque chose"
              :rows="2"
              :max-rows="6"
            >{{tool.description}}</b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary" class="submitboutton">Ajouter l'outil</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../Firebase";
let test = firebase.firestore().collection("tools");
export default {
  name: "AddTool",
  data() {
    return {
      ref: firebase.firestore().collection("tools"),
      tool: {
        caract: {},
        compatibilite: {}
      },
      options: [
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" }
      ],
      types: [
        { value: "Client Web", text: "Client Web" },
        { value: "Client Lourd", text: "Client Lourd" },
      ],
      programLevel: [
        { value: "Debutant", text: "Debutant" },
        { value: "Moyen", text: "Moyen" },
        { value: "Expert", text: "Expert" },
      ],
      Type_test: [
        { value: "Unitaire", text: "Unitaire" },
        { value: "Integration", text: "Integration" },
        { value: "Fonctionnel", text: "Fonctionnel" },

      ],
      price: [
        { value: "Payant", text: "Payant" },
        { value: "Gratuit", text: "Gratuit" },
      ],
      size: 0
    };
  },
  methods: {
    onSubmit(evt) {
      var tmpSize =this.size
      evt.preventDefault()

      this.ref
        .add(this.tool)
        .then(docRef => {
          this.tool.toolname = ""

          this.tool.caract.Type = ""
          this.tool.caract.Web_app = ""
          this.tool.caract.API_Webservices = ""
          this.tool.caract.Desktop_app = ""
          this.tool.caract.Mobile_app = ""
          this.tool.caract.Base_de_donnee = ""
          this.tool.caract.Langage = ""
          this.tool.caract.Niveau_de_programmation = ""
          this.tool.caract.Type_de_test = ""
          this.tool.caract.Technique_de_test = ""
          this.tool.caract.Import_Export = ""
          this.tool.caract.Documentation = ""
          this.tool.caract.Licence = ""
          this.tool.caract.Support = ""
          this.tool.caract.Prix = ""

          this.tool.compatibilite.Jenkins = ""
          this.tool.compatibilite.Gitlab = ""
          this.tool.compatibilite.Cucumber = ""
          this.tool.compatibilite.Jira = ""
          this.tool.compatibilite.Xray = ""
          this.tool.compatibilite.Github = ""

          this.tool.url = ""
          this.tool.logo = ""
          this.tool.description = ""
        })
        .catch(error => {
          alert("Error adding document: ", error)
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#fieldsetHorizontal{
  height:40px;

}
.submitboutton{
  margin-top:2%;
}
.jumbotron{
  margin-bottom: 0 !important;
}
</style>