<template>
<div>
<div class = "wrapper">
  <div class = "ward-intro">
    <h4>Whether you're just a visitor or here to stay, we're happy to have you.
    Feel free to look at what we are studying this week together, or check out
    the ward directory to find your potential new friends.
    Click the link below if you need to contact the bishop or other leaders. </h4>
  
  </div>
  <div class = "quote">
    <p>Life is about learning to dance in the rain</p>
    <br>
    <h6>git@github.com:ajudd22/ward-directory.git</h6>
  </div>
</div>
</div>
</template>

<script>
export default{
  name: 'Home',

}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ward-intro{
width: 60%;
}
h3{
text-align: center;
}

p{
  font-family: cursive;
  font-size: 36px;
}
</style>
