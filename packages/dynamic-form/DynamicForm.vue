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
        :label="field.label"
        :prop="key"
        :required="field.required"
      >
        <component
          :is="_inputTypeMap[field.type]"
          v-model="_value[key]"
          v-bind="field.attrs"
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
import { Fields } from '@/types/common'
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

  get _value () {
    return this.value
  }

  set _value (value: any) {
    this.$emit('input', value)
  }

  get _rules () {
    return {}
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

  public submit () {
    this._form.validate((valid) => {
      if (valid) {
        this.$emit('submit')
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
