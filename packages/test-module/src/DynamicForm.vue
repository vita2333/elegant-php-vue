<template>
  <div>
    <a-form-model :model="_value">
      <a-form-model-item
        v-for="(field, key) in _fields"
        v-show="!field.hidden"
        :key="key"
        :extra="field.desc"
        :has-feedback="true"
        :label="field.label"
        :prop="key"
        :required="field.required"
        v-bind="layout"
      >
        <component
          :is="InputTypeMap[field.type]"
          v-model="_value[key]"
        />
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button
          type="primary"
          @click="onSubmit"
        >
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { AntField, Fields } from '@/types/common'
import InputText from './basic/InputText.vue'
// eslint-disable-next-line no-unused-vars
import { WrappedFormUtils } from 'ant-design-vue/types/form/form'
import DynamicFormItem from './DynamicFormItem.vue'
import { InputTypeMap } from './utils'

/**
   * 组件必须有:prop:value 和 emit('change')
   *
   * 参考自定义表单控件
   自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

   提供受控属性 value 或其它与 valuePropName-参数) 的值同名的属性。
   提供 onChange 事件或 trigger-参数) 的值同名的事件。
   不能是函数式组件。
   */
@Component({
  components: {
    InputText,
    DynamicFormItem
  }
})
export default class DynamicForm extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  readonly fields!: Fields

  @Prop({
    type: Object,

    default () {
      return {}
    }
  })
  readonly value!: any

  @Prop({
    type: Object,

    default () {
      return {
        // formRow: { gutter: 12 },
        // formCol: { span: 6 },
        formItem: {
          labelCol: { span: 6 }, // 共24
          wrapperCol: { span: 16 }
        }
      }
    }
  })
  readonly layout!: Object

  @Prop({
    type: Boolean
  })
  readonly btnLoading!: boolean

  @Prop({
    type: Function
  })
  readonly onValuesChange: ((props: Vue, fields: AntField) => void) | undefined

  @Prop({
    type: Function
  })
  readonly onFieldsChange: ((props: Vue, fields: AntField) => void) | undefined

  form: Vue | WrappedFormUtils | null = null

  get _value () {
    return this.value
  }

  set _value (value: any) {
    this.$emit('input', value)
  }

  get _fields (): Fields {
    const fields = { ...this.fields }
    return fields
  }

  set _fields (val: Fields) {
    this.$emit('update:fields', val)
  }

  get InputTypeMap () {
    return InputTypeMap
  }

  created () {
    this.form = this.$form.createForm(this, {})
  }

  handleSubmit (e: Event) {
    e.preventDefault()
    ;(this.form as WrappedFormUtils).validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.$emit('submit', values)
      }
    })
  }

  reset () {
    ;(this.form as WrappedFormUtils).resetFields()
  }

  getForm () {
    return this.form as WrappedFormUtils
  }

  onSubmit () {
    console.log('thisValue======================')
    console.log(this._value) // todo
    console.log('======================')
  }
}
</script>

<style lang="less" scoped></style>
