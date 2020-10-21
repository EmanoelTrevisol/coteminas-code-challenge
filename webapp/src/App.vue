<template>
  <div id="app">
    <div id="nav">
      <router-view key="header" name="header"></router-view>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="stylus">
#app {
  font-family: $ff-roboto

  #nav {
    margin: 0;
    padding: 5px 10px;
    height: 60px;
    background: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
