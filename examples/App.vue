<template>
  <div id="app">
    <div class="links">
      <router-link to="/">
        default demo
      </router-link>
      <router-link to="/">
        demo
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<style scoped>
.links {
  display: flex;
  justify-content: space-evenly;
}
</style>
