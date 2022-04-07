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
@import "../public/css/global.css";
@import "../public/css/font.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0.3rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--themeColor);
    }
  }
}
</style>
