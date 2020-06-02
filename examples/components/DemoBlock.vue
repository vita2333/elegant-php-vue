<template>
  <div class="doc-demo-block">
    <h2 class="doc-demo-block__title">
      {{ title }}
    </h2>
    <div class="doc-demo-block__body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',

  props: {
    title: String
  }
}
</script>

<style lang="less">
@import '../../packages/style/var';

.doc-demo-block {
  &__title {
    padding: 32px 16px 16px;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    color: @doc-text-light-blue;
  }

  &__body {
    padding: 20px;
  }

  &:first-of-type {
    .doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
