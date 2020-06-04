<template>
  <div>
    <slot name="header" />
    <a-form-model
      ref="form"
      :model="_value"
      :rules="_rules"
      v-bind="_formProps"
    >
      <a-form-model-item
        v-for="(field, key) in fields"
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
          :is="_inputTypeMap[field.type]"
          v-model="_value[key]"
          v-bind="_getInputProps(field)"
        />
      </a-form-model-item>
      <slot name="footer">
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button
            type="primary"
            @click="submit"
          >
            Create
          </a-button>
          <a-button
            style="margin-left: 10px;"
            @click="resetFields"
          >
            Reset
          </a-button>
        </a-form-model-item>
      </slot>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { AntField, Field, Fields } from '@/types/common'
// eslint-disable-next-line no-unused-vars
import { InputTypeMap } from './utils'
// eslint-disable-next-line no-unused-vars
import { FormModel } from 'ant-design-vue'

@Component({
  components: {}
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

  get _value () {
    return this.value
  }

  set _value (value: any) {
    this.$emit('input', value)
  }

  get _rules () {
    return []
  }

  get _formProps () {
    return this.$attrs
  }

  get _inputTypeMap () {
    return InputTypeMap
  }

  get _form () {
    return this.$refs.form as FormModel
  }

  _getInputProps (field: Required<Field> & Record<string, any>) {
    const {
      label,
      type,
      rules,
      required,
      hidden,
      disabled,
      desc,
      unit,
      placeholder,
      ...props
    } = field
    return props
  }

  public submit () {
    this._form.validate((valid) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  public resetFields () {
    this._form.resetFields()
  }

  public getForm () {
    return this._form
  }
}
</script>

<style lang="less" scoped></style>
