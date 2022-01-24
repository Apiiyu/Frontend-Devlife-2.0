<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.card-table {
    width: 99%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    height: auto;
    margin-bottom: 100px;
    background-color: white;
}
.main-color {
    color: #4E4081;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
