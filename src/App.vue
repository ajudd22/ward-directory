<template>
<div id="app">
  <h2>Welcome to the 1st Ward!</h2>
  <div id="menu">
      <router-link to="/ScriptureStudyPage">
        <div class="menu-item scriptureStudy">
          <img src="/images/scriptures.jpeg">
          <p>Scripture Study</p>
        </div>
      </router-link>
      <router-link to="/">
        <img id = "homeimg" src="/images/prayer.jpg">
      </router-link>
      <router-link to="/DirectoryPage">
        <div class="menu-item directory">
          <img src="/images/churchlogo.jpeg">
          <p>Ward Directory</p>
        </div>
      </router-link>
    </div>
    <router-link to="/LeadershipPage">
      <h5> Contact current leaders</h5>
    </router-link>
  <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
* {
  box-sizing: border-box;
}


body {
  margin: 10px;
  background-color:#a6e5ff;

}
#app{
  display: flex;
  flex-direction: column;
justify-content: center;
}

#menu {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  flex-direction: row;
}

#menu a {
  color: #B84901;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

}
h2{
  font-size: 36px;
  font-family: monospace;
  text-align: center;
}
#heading {
  display: flex;
  margin-right: 20%;
  margin-left: 20%;
  justify-content: center;
}

#homeimg{
  width: 100%;
}
img{
border-radius: 15%;
}

.directory{
  justify-content: space-between;
}
.menu-item {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  height: 40%;
  width:50%;
}
h5{
text-align: center;
}

.menu-item p {
  margin: 0px;
}
.menu-item img {
  width: 100%;
}
</style>
