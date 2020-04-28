<template>
  <div class="about">
    <div class = "heading">
      <h1>Ward Directory</h1>
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchInput" />
      </form>
    </div>
    <div class= "directory-container">
      <Directory :persons="persons"/>
    </div>
  </div>
</template>
<script>
import Directory from "../components/Directory.vue"
export default{
  name: 'DirectoryPage',
  components:{
    Directory,
  },
  data() {
    return{
      searchInput:''
    }
  },
  computed: {
    persons() {
      return this.$root.$data.persons.filter(person => person.first_name.toLowerCase().search(this.searchInput)>=0);
    }
  }
}

</script>

<style>

</style>
