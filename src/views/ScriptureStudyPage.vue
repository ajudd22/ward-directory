<template>
  <div class="ScriptureStudyPage">
    <div class= "scripture-container script1">
      <h3>Ponder this scripture</h3>
      <p> or if ye have known of his goodness and have tasted of his love,
      and have received a remission of your sins, which causeth such exceedingly
       great joy in your souls, even so I would that ye should remember, and
       always retain in remembrance, the greatness of God, and your own
       nothingness, and his goodness and long-suffering towards you, unworthy
       creatures...</p>
    </div>
    <div class= "scripture-container script2">
      <h3>In light of the scripture that comes after it: </h3>
      <p> And behold, I say unto you that if ye do this ye shall always rejoice,
       and be filled with the love of God,...</p>
    </div>
    <div class= "scripture-container script3">
      <h3>As well as the list that comes after...</h3>
      <p> and always retain a remission of your sins; and ye shall grow in the
      knowledge of the glory of him that created you, or in the knowledge of
      that which is just and true. And ye will not have a mind to injure one
      another, but to live peaceably, and to render to every man according to
      that which is his due.And ye will not suffer your children that they go
      hungry, or naked; neither will ye suffer that they transgress the laws of God...</p>
    </div>
  </div>

</template>

<script>

export default {
  name: 'ScriptureStudyPage',
  components: {
  }
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
