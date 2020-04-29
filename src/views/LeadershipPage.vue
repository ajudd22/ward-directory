<template>
<div class = "wrapper">
  <h3> Select an organization</h3>
  <div class = "options">
    <div class = "leadertab bishopbric">
      <input type= "radio" @click= "select('bishopbric')" id=bishopbric name = "leadership" value ="bishopbric">
      <label for="bishopbric">Bishopbric</label>
    </div>
    <div class = "leadertab reliefsociety">
      <input type= "radio" @click= "select('reliefsociety')" id=reliefsociety name = "leadership" value ="reliefsociety">
      <label for="bishopbric">Relief Society</label>
    </div>
    <div class = "leadertab primary">
      <input type= "radio" @click= "select('primary')" id = primary name = "leadership" value = "primary">
      <label for="bishopbric">Primary</label>
      </div>
    <div class = "leadertab eldersquorum">
      <input type= "radio" @click= "select('eldersquorum')" id = eldersquorum  name = "leadership" value = eldersquorum>
      <label for="bishopbric">Elder's Quorum</label>
    </div>
  </div>
  <Directory :persons="persons"/>
</div>
</template>
<script>
import Directory from "../components/Directory.vue"

export default{
  name: 'LeadershipPage',
  components:{
    Directory
  },
  data(){
    return{
      organization: '',
    }
  },
  computed:{
    persons() {
      return this.$root.$data.persons.filter(person => person.calling === this.organization)
    }
  },
  methods:{
    select(organization){
     this.organization = organization;
    }
  }
}
</script>
<style>
.wrapper{

}
h3{
text-align: center;
}
.options{
margin-left:20%;
margin-right:20%;
display:flex;
flex-wrap:wrap;
flex-direction: row;
}
.leadertab{
margin: 5px;
}

</style>
