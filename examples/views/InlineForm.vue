<template>
  <DynamicForm
    ref="dyForm"
    v-model="form"
    :fields="fields"
    v-bind="formProps"
    @submit="onSubmit"
  >
    <div slot="header">
      <pre>{{ form }}</pre>
    </div>
    <a-form-model-item slot="footer">
      <a-button
        :disabled="form.user === '' || form.password === ''"
        html-type="submit"
        type="primary"
      >
        登录
      </a-button>
    </a-form-model-item>
  </DynamicForm>
</template>

<script lang="ts">
import DynamicForm from '@p/dynamic-form'
import { Component, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { Fields } from '@/types/common'
import { FieldTypes } from '@/types/enum'

Vue.use(DynamicForm)
@Component({
  components: {}
})
export default class InlineForm extends Vue {
  formProps = {
    layout: 'inline',
    hideRequiredMark: true
  }

  form: any = {
    username: '',
    password: ''
  }

  fields: Fields = {
    username: {
      label: '用户名',
      type: FieldTypes.text,
      required: true,
      rules: []
    },
    password: {
      label: '密码',
      type: FieldTypes.password,
      required: true,
      rules: [],
      attrs: {
        options: [
          { label: '区域一', value: '1' },
          { label: '区域二', value: '2' }
        ],
        placeholder: '请选择活动区域'
      }
    }
  }

  resetForm () {
    ;(this.$refs.dyForm as any).resetFields()
  }

  onSubmit () {
    console.log(this.form)
  }
}
</script>
