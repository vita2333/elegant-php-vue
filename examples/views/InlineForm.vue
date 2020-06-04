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
    <!--    <div slot="footer">-->
    <!--      这里是Form Footer-->
    <!--    </div>-->
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
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  }

  form: any = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
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
      props: {
        options: [
          { label: '区域一', value: '1' },
          { label: '区域二', value: '2' }
        ],
        placeholder: '请选择活动区域'
      }
    }
  }

  rules = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
    date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
    type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
    resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
    desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
  }

  mounted () {
    setTimeout(() => {
      this.form = {
        name: '测试活动',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }, 2000)
  }

  submitForm () {
    ;(this.$refs.dyForm as any).validate((valid) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  resetForm () {
    ;(this.$refs.dyForm as any).resetFields()
  }

  onSubmit () {
    console.log(this.form)
  }
}
</script>
