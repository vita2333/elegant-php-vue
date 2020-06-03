<template>
  <a-form-model-item
    v-show="!field.hidden"
    :extra="field.desc"
    :label="field.label"
    :prop="fieldKey"
    :required="field.required"
    v-bind="layout"
  >
    <slot />
  </a-form-model-item>
</template>

<script lang="ts">
import InputMixin from './InpuMixin'
import { FieldTypes, Rules } from '@/types/enum'
import { mixins } from 'vue-class-component'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class DynamicFormItem extends mixins(InputMixin) {
  @Prop({
    type: Object,

    default () {
      return {}
    }
  })
  readonly value!: any

  get number () {
    return FieldTypes.number
  }

  get _value () {
    return this.value
  }

  set _value (value: any) {
    this.$emit('input', value)
  }

  get inputMap () {
    return {
      [FieldTypes.text]: 'AInput',
      [FieldTypes.number]: 'AInputNumber',
      [FieldTypes.textarea]: 'ATextarea',
      [FieldTypes.password]: 'AInputPassword'
    }
  }

  get placeholder () {
    if (this.field.placeholder) {
      return this.field.placeholder
    }
    if (this.field.rules) {
      if (this.field.rules.includes(Rules.required)) {
        return '请填写' + this.field.label
      }
    }
    return '可不填'
  }
}
</script>

<style lang="less" scoped></style>
