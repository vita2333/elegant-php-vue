<template>
  <DynamicForm
    ref="form"
    :default-form-values="defForm"
    :fields="fields"
    :on-fields-change="onFieldsChange"
    :on-values-change="onValuesChange"
  />
</template>

<script lang="ts">
import DynamicForm from './DynamicFrom.vue'
import { Component, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { AntField, Fields } from '@/types/common'
import { FieldTypes, Rules } from '@/types/enum'

@Component({
  components: {
    DynamicForm
  }
})
export default class TestModuleDemo extends Vue {
  defForm: any = {}
  fields: Fields = {
    text: {
      label: 'text',
      type: FieldTypes.text,
      rules: [Rules.required],
      unit: 'sdfdsf',
      desc: 'sdfsdfdsf'
    }
  }

  mounted () {
    setTimeout(() => {
      this.defForm = {
        text: 170
      }
    }, 2000)
  }

  onValuesChange (_vue: any, fields: AntField) {
    ;(this.fields as any).switch.disabled = true
    console.log('onValuesChange====', fields) // todo
  }

  onFieldsChange (_vue: any, fields: AntField) {
    console.log('onFieldsChange====', fields) // todo
  }
}
</script>
