<template>
  <DynamicForm />
</template>
<script>
import DynamicForm from './DynamicFrom'

export default {
  name: 'TestModuleDemo',
  components: { DynamicForm },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: 'default name',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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
