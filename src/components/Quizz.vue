<template>
<div>
    <b-container class="container" >
        <b-progress :value="value" variant="warning" :striped="striped" class="mt-2"></b-progress>
        <b-row class="justify-content-md-center">
            <div class="choix" id="questionnaire"  v-for="question in questions" v-bind:key="question.id">
                <div v-if="id == question.id">
                    <b-form-group  :label=question.titre>
                        <div v-if="question.reponse1 != ''">
                            <b-form-radio button='button'  button-variant='outline-secondary' size='md' v-model="selected" class="radiobouton" name="some-radios" :value=question.reponse1>{{question.reponse1}}</b-form-radio>
                        </div>
                        <div v-if="question.reponse2 != ''">
                            <b-form-radio button='button' button-variant='outline-secondary' size='md' v-model="selected" class="radiobouton" name="some-radios" :value=question.reponse2>{{question.reponse2}}</b-form-radio>
                        </div>
                        <div v-if="question.reponse3 != ''">
                            <b-form-radio button='button' button-variant='outline-secondary' size='md' v-model="selected" class="radiobouton" name="some-radios" :value=question.reponse3>{{question.reponse3}}</b-form-radio>
                        </div>
                        <div v-if="question.reponse4 != ''">
                            <b-form-radio button='button'  button-variant='outline-secondary' size='md' v-model="selected" class="radiobouton" name="some-radios" :value=question.reponse4>{{question.reponse4}}</b-form-radio>
                        </div>
                        <div v-if="question.reponse5 != ''">
                            <b-form-radio button='button'  button-variant='outline-secondary' size='md' v-model="selected" class="radiobouton" name="some-radios" :value=question.reponse5>{{question.reponse5}}</b-form-radio>
                        </div>
                    </b-form-group>
                </div>
            </div>
        </b-row>
        <b-row class="justify-content-md-center">
            <div id="buttons">
                <b-button id="boutonSuivant" class="bouton" @click='questionSuivante' >SUIVANT</b-button>
                <b-button :disabled=isDisabled class="bouton" @click='calculerResultat' >VOIR LES OUTILS</b-button>
            </div>
        </b-row>
    </b-container>
</div>
</template>

<script>
import Tools from '../assets/tools.json'
import Quiz from '../assets/quiz.json'

export default {
    data () {
        return {
            id: 1,
            cpt:0,
            questions: Quiz.questions,
            selected: '',
            disabled:0,
            reponse : [],
            striped: true,
            value : 20
        }
  },
  props: ['tools'],
  methods: {
      questionSuivante () {
        if(this.reponse.length == 0){
            this.reponse.push(this.selected);
        }else{
            this.reponse[this.id-1] = this.selected;
        }
        if(this.id == this.questions.length ){
            document.getElementById("boutonSuivant").remove();
        }
        if(this.id<this.questions.length && this.id > 0 && this.value<=100){
            this.id = this.id + 1;
            this.value=this.value+20;
        } 
        this.cpt=this.cpt+1;
  
         console.log(this.reponse)  
      },
      calculerResultat () {
          for(var i=0; i<this.tools.length; i++){
              if(this.tools[i].caract.Web_app == "Non" && this.reponse[0] == this.questions[0].reponse1){
                  delete this.tools[i] 
              }
          }
          this.$emit('return-tools', this.tools)
        
      }
  },
  computed: {
      isDisabled(){
          if(this.cpt<this.questions.length){
              return true
          }else{ 
              return false
          }
      }
  },
  mounted () {
     
  }
}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bouton{
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-align: center;
  cursor:pointer;
  border:none;
  margin-right:10px;
  
}
.choix{
    font-size:30px;
}
.container{
    margin-top:10%;
}
.radiobouton{
    text-align:left;
}
.mt-2{
    margin-bottom:2%;
}


</style>
