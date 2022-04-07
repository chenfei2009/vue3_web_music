<template>
  <nav>
    <router-link to="/">发现</router-link> |
    <router-link to="/vlog">播客</router-link> |
    <router-link to="/user">我的</router-link> |
    <router-link to="/subs">关注</router-link> |
    <router-link to="/about">云村</router-link>
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
