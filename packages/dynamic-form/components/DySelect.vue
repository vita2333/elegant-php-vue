<template>
  <a-select
    v-model="_value"
    v-bind="$attrs"
  >
    <a-select-option
      v-for="option in $attrs.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </a-select-option>
  </a-select>
</template>

<script>
import CustomComponentMixin from '@p/dynamic-form/mixins/CustomComponentMixin'

export default {
  name: 'DySelect',
  mixins: [CustomComponentMixin]
}
</script>
