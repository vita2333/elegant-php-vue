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
        text: 170,
        picker: '1',
        search_id: '338',
        search: {
          name: '哈哈哈哈'
        },
        tel: 'sdfsdfdf',
        timer: '13:20',
        datetime: '2015-02-12 12:00',
        myTel: '123123123',
        myName: '哈哈',
        checkers: ['1', 'dsf'],
        img: '',
        switch: 'open',
        editor:
          '<p>我是圣诞快</p><p class="ql-align-center">乐副经理开始对方就凉快圣诞节疯狂劳动竞赛看咯防静电搜开了房</p><p class="ql-align-center"><img src="https://img.meijinw.com/1571655332847.png"></p>'
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
