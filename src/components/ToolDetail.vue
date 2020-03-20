<template>
  <b-row>
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
        <b-btn variant="danger" @click.stop="deleteboard(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import Router from '../router/index'

export default {
  name: 'ToolDetail',
  data () {
    return {
      key: '',
      tool: {}
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
        name: 'ToolDetail',
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
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>