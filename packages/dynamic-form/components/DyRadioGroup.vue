<template>
  <a-radio-group
    v-model="_value"
    v-bind="$attrs"
  >
    <a-radio
      v-for="option in $attrs.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </a-radio>
  </a-radio-group>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import CustomComponentMixin from '../mixins/CustomComponentMixin'

@Component({
  components: {}
})
export default class DyRadioGroup extends mixins(CustomComponentMixin as any) {}
</script>

<style lang="less" scoped></style>
