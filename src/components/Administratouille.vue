<template>
  <b-row class="top-menu">
    <b-col cols="12">
      <h2>
        Tool List
        <b-link href="/administratouille/add">(Add Tool)</b-link>
      </h2>
      <b-table striped hover :items="tools" :fields="fields">
         <template v-slot:cell(actions)="data">
          <b-button @click.stop="details(data)" variant="primary">Details</b-button>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from '../Firebase';

export default {
  name: 'Administratouille',
  data() {
      return {
          ref: firebase.firestore().collection('tools'),
          tools: [],
          fields: [
            { key: 'title', label: 'Title', sortable: true, 'class': 'text-left' },
            { key: 'actions', label: 'Action', 'class': 'text-center' }
          ],
      }
  },
  
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.tools = [];
      querySnapshot.forEach((doc) => {
        this.tools.push({
          key: doc.id,
          title: doc.data().toolname
        });
      });
    });
  },
  methods: {
    details (tool) {
      this.$router.push({ path: `/administratouille/detail/${tool.item.key}` })
    }
  },
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
  .top-menu{
    margin-top: 100px;
  }
</style>