<template>
  <div class="hello">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
