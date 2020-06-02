<template>
  <div class="home">
    <dynamic-form />
  </div>
</template>

<script>
import Vue from 'vue'
import DynamicForm from '@p/dynamic-form'

Vue.use(DynamicForm)
export default {
  name: 'Home'
}
</script>
