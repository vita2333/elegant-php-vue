<template>
  <div class="home">
    <TestModuleDemo />
  </div>
</template>

<script>
import Vue from 'vue'
import TestModuleDemo from '@p/test-module'

Vue.use(TestModuleDemo)
export default {
  name: 'Home',
  components: {}
}
</script>
