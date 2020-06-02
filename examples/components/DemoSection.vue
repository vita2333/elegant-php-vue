<template>
  <section
    :class="demoName"
    class="doc-demo-section"
  >
    <slot />
  </section>
</template>

<script>
import { decamelize } from '@p/utils'

export default {
  name: 'DemoSection',

  computed: {
    demoName () {
      const { meta } = this.$route || {}
      if (meta && meta.name) {
        return `demo-${decamelize(meta.name)}`
      }

      return ''
    }
  }
}
</script>

<style lang="less">
.doc-demo-section {
  min-height: calc(100vh - 56px);
  padding-bottom: 20px;
  box-sizing: border-box;
}
</style>
