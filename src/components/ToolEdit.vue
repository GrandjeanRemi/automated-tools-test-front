<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Tool
        <router-link :to="{ name: 'ToolEdit', params: { id: key } }">()</router-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nom de l'outil"
          >
            <b-form-input id="toolname" v-model.trim="tool.toolname"></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldsetHorizontal"
            required
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Type"
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
            <b-form-select v-model.trim="tool.caract.Base_de_donnée" :options="options"></b-form-select>
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
            <b-form-input id="support" v-model.trim="tool.caract.Support"></b-form-input>
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
          <b-button type="submit" variant="primary">Mettre a jour</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'

export default {
  name: 'ToolEdit',
  data () {
    return {
      key: this.$route.params.id,
      options: [
        { value: "Oui", text: "Oui" },
        { value: "Non", text: "Non" }
      ],
      types: [
        { value: "Client web", text: "Client Web" },
        { value: "Client lourd", text: "Client Lourd" },
      ],
      programLevel: [
        { value: "Débutant", text: "Debutant" },
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
      tool: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('tools').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.tool = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      const updateRef = firebase.firestore().collection('tools').doc(this.$route.params.id);
      updateRef.set(this.tool).then((docRef) => {
        this.key = ''
        this.tool.toolname = ''
        this.tool.description = ''
        this.tool.url = ''
        this.$router.push({ name: 'ToolDetail', params: { id: this.$route.params.id }})
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>