<template>
  <b-row class="top-menu">
    <b-col cols="12">
      <h2>
        Edit tool
        <b-link href="/administratouille">(Tool List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{tool.toolname}}
        </template>
        <template slot="lead">
          Title: {{tool.toolname}}<br>
          Description: {{tool.description}}<br>
          URL: {{tool.url}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Edit</b-btn>
        <b-button variant="danger" id="show-btn" @click="$bvModal.show('bv-modal-example')">Delete</b-button>
      </b-jumbotron>
      <div class="top-menu">
        <b-modal class="top-menu" id="bv-modal-example" hide-footer>
          <template v-slot:modal-title style="text-align:center">
            Etes-vous sur de supprimer ?
          </template>
          <div class="center-top">
            <b-btn variant="danger" @click.stop="deleteboard(key)">Supprimer</b-btn>
            <b-btn @click="$bvModal.hide('bv-modal-example')">Fermer</b-btn>
          </div>
        </b-modal>
    </div>
    </b-col>
  </b-row>
  
</template>

<script>

import firebase from '../Firebase'

export default {
  name: 'ToolDetail',
  components: {

  },
  data () {
    return {
      key: '',
      tool: {},
    }
  },
  created () {
    const ref = firebase.firestore().collection('tools').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.tool = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editboard (id) {
      this.$router.push({
        name: 'ToolEdit',
        params: { id: id }
      })
    },
    deleteboard (id) {
      firebase.firestore().collection('tools').doc(id).delete().then(() => {
        this.$router.push({
          name: 'Administratouille'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    },
  }
}
</script>

<style>
  .top-menu{
    margin-top:100px;
  }

  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
  .test {
    background-color: black;
  }

  .center-top{
    text-align:center;
  }

</style>