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
export default class TypicalForm extends Vue {
  formProps = {
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
    name: {
      label: '活动名称',
      type: FieldTypes.text,
      required: true,
      rules: []
    },
    region: {
      label: '活动区域',
      type: FieldTypes.picker,
      required: true,
      rules: [],
      props: {
        options: [
          { label: '区域一', value: '1' },
          { label: '区域二', value: '2' }
        ],
        placeholder: '请选择活动区域'
      }
    },
    date: {
      label: '活动时间',
      type: FieldTypes.datetime,
      required: true,
      rules: [],
      props: {
        style: 'width:100%'
      }
    },
    delivery: {
      label: '即时配送',
      type: FieldTypes.switch,
      required: true,
      rules: []
    },
    type: {
      label: '活动性质',
      type: FieldTypes.checkers,
      required: true,
      rules: [],
      props: {
        options: [
          { label: '美食/餐厅线上活动', value: 'online' },
          { label: '地摊活动', value: 'stall' },
          { label: '线下主题活动', value: 'offline' },
          { label: '单纯品牌曝光', value: 'showcase' }
        ]
      }
    },
    resource: {
      label: '特殊资源',
      type: FieldTypes.radio,
      required: true,
      rules: [],
      props: {
        options: [
          { label: '线上品牌商赞助', value: 'online' },
          { label: '线下场地免费', value: 'offline' }
        ]
      }
    },
    desc: {
      label: '活动形式',
      type: FieldTypes.textarea,
      required: true,
      rules: []
    }
  }

  onSubmit () {
    console.log('submit!', this.form)
  }
}
</script>
