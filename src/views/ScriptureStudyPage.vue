<template>
<div class = "wrapper">
  <h3>Welcome to daily study!</h3>
  <Scriptures :scriptures = "scriptures"/>
  </div>
</template>

<script>
import Scriptures from "../components/Scriptures.vue"
export default {
  name: 'ScriptureStudyPage',
  components: {
    Scriptures
  },
  data(){
    return{
      selection: Math.floor(Math.random() *31),
    }
  },
  computed:{
    scriptures() {
      return this.$root.$data.scriptures.filter(scripture => scripture.id === this.selection);
    },

  },
}
</script>
<style>
.ScriptureStudyPage{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items:flex-start;
}
h3{
font-family: sans-serif;
}
.scripture-container{
  width: 25%;
  height:25%;
}
</style>
