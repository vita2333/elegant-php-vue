<template>
  <div id="app">
    <div class="links">
      <router-link to="/">
        Typical form
      </router-link>
      <router-link to="/inline">
        Inline form
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
