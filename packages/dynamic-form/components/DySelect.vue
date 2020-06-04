<template>
  <a-select v-model="_value">
    <a-select-option
      v-for="option in _props.options"
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
