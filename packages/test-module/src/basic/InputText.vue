<template>
  <a-form-item
    v-show="!field.hidden"
    :extra="field.desc"
    :label="field.label"
    v-bind="layout"
  >
    <component
      :is="inputMap[field.type]"
      v-decorator="decorator"
      :disabled="field.disabled"
      :placeholder="placeholder"
      :style="cellStyle"
      allow-clear
    >
      <span
        v-if="field.unit"
        slot="addonAfter"
      >
        {{ field.unit }}
      </span>
    </component>
    <span
      v-if="field.type === number && field.unit"
      class="ml10"
    >{{ field.unit }}</span>
  </a-form-item>
</template>

<script lang="ts">
import InputMixin from '../InpuMixin'
import { FieldTypes, Rules } from '@/types/enum'
import { mixins } from 'vue-class-component'
import { Component } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class InputText extends mixins(InputMixin) {
  get number () {
    return FieldTypes.number
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
