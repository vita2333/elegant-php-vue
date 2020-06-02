<template>
  <div class="home">
    <epv-dynamic-form />
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
