<template>
<div class="wrapper">
  <div class="persons">
    <div class="person" v-for="person in persons" :key="person.id">
        <h1>{{person.first_name}} {{person.last_name}}</h1>
        <p>{{person.email_address}}</p>
      <div class="image">
        <img :src="'/images/p'+person.id%20+'.jpeg'">
      </div>
    </div>
  </div>
</div>
</template>
<script>

export default{
  name: 'Directory',
  props: {
    persons: Array
  },
}
</script>
<style>
.persons{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content:center;
  align-items: flex-start;
}
.person{
width: 20%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:row;
  justify-content: flex-start;
  margin:20px;
}
img{
width: 50%;
}

</style>
