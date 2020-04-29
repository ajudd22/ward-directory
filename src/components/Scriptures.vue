<template>
<div class = "wrapper">
  <div class= "dailystudy" v-for= "scripture in scriptures" :key="scripture.id">
    <div class = "scripturetext text1">
      <h1>Consider this passage:</h1>
      <p>{{scripture.text1}}</p>
    </div>
    <div class = "scripturetext text2">
      <h1>Alongside this excerpt:</h1>
      <p>{{scripture.text2}}</p>
    </div>
  </div>
</div>
</template>

<script>
  export default{
  name: 'Scriptures',
  props:{
    scriptures: Array
  },

  }


</script>


<style>

h1{
font-family: sans-serif;
}
.dailystudy{
  display: flex;
  flex-direction: row;
  margin-left:10%;
  margin-right:10%;
}
.scripturetext{
  width: 25%;
  height:25%;
  margin-left:10%;
  margin-right:10%;

}



</style>
