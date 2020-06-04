<template>
  <DynamicForm
    ref="dyForm"
    v-model="form"
    :fields="fields"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <div slot="header">
      这里是Form Header
      {{ form }}
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
export default class TestModuleDemo extends Vue {
  labelCol = { span: 4 }
  wrapperCol = { span: 14 }
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
    name: {
      label: '活动名称',
      type: FieldTypes.text,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    region: {
      label: '活动区域',
      type: FieldTypes.text,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    date: {
      label: '活动时间',
      type: FieldTypes.datetime,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    delivery: {
      label: '即时配送',
      type: FieldTypes.switch,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    type: {
      label: '活动性质',
      type: FieldTypes.checkers,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      options: [
        { label: '美食/餐厅线上活动', value: 'online' },
        { label: '地摊活动', value: 'stall' },
        { label: '线下主题活动', value: 'offline' },
        { label: '单纯品牌曝光', value: 'showcase' }
      ]
    },
    resource: {
      label: '特殊资源',
      type: FieldTypes.radio,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      options: [
        { label: '线上品牌商赞助', value: 'online' },
        { label: '线下场地免费', value: 'offline' }
      ]
    },
    desc: {
      label: '活动形式',
      type: FieldTypes.textarea,
      required: true,
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
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
}
</script>
