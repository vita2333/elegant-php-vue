<template>
  <div>
    <a-form
      v-if="form"
      id="dynamic-form"
      :form="form"
      @submit="handleSubmit"
    >
      <!--一行的表单-->
      <a-row
        v-if="layout.formRow"
        v-bind="layout.formRow"
      >
        <a-col
          v-for="(field, key) in _fields"
          :key="key"
          v-bind="layout.formCol"
        >
          <component
            :is="componentMap[field.type]"
            :field="field"
            :field-default-value="defaultFormValues[key]"
            :field-key="key"
          />
        </a-col>
      </a-row>
      <!--一列的表单-->
      <component
        :is="componentMap[field.type]"
        v-for="(field, key) in _fields"
        v-else
        :key="key"
        :field="field"
        :field-default-value="defaultFormValues[key]"
        :field-key="key"
        :layout="layout.formItem"
      />
      <slot name="footer" />
      <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <slot name="button">
          <a-button
            :loading="btnLoading"
            html-type="submit"
            type="primary"
          >
            提交
          </a-button>
          <a-button
            class="ml15"
            html-type="button"
            type="default"
            @click="reset"
          >
            重置
          </a-button>
        </slot>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { AntField, Fields } from '@/types/common'
import { FieldTypes } from '@/types/enum'
import InputText from './basic/InputText.vue'
// eslint-disable-next-line no-unused-vars
import { WrappedFormUtils } from 'ant-design-vue/types/form/form'

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
    InputText
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
  readonly defaultFormValues!: any

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

  get _fields (): Fields {
    const fields = { ...this.fields }
    return fields
  }

  set _fields (val: Fields) {
    this.$emit('update:fields', val)
  }

  get componentMap () {
    return {
      [FieldTypes.text]: 'InputText'
    }
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
}
</script>

<style lang="less" scoped></style>
