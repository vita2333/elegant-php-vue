<template>
  <demo-section>
    <demo-block title="dynamic-form">
      <epv-dynamic-form
        v-model="model"
        :form="form"
        @click="onSubmit"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  name: 'DynamicFormDemo',
  data () {
    return {
      model: {
        name: 'name',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      form: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style lang="less"></style>
