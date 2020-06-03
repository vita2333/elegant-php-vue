import './index.css'

const dynamicForm = {
  name: 'epv-dynamic-form',
  props: {
    form: { type: Object, required: true },
    value: { type: Object, required: true }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        console.log('value======================')
        console.log(value) // todo
        console.log('======================')

        this.$emit('input', value)
      }
    }
  },
  methods: {
    onClick (e) {
      console.log('e======================')
      console.log(e) // todo
      console.log('======================')

      this.$emit('click', e)
    }
  },
  render () {
    const { _value, form, onClick } = this
    console.log('_Value======================')
    console.log(_value) // todo
    console.log('======================')

    const Form = _value ? (
      <a-form-model
        model={_value}
        rules={form.rules}
        hideRequiredMark={form.hideRequiredMark}
        labelAlign={form.labelAlign}
        layout={form.layout}
        labelCol={form.labelCol}
        wrapperCol={form.wrapperCol}
        colon={form.colon}
        validateOnRuleChange={form.validateOnRuleChange}
      >
        <a-form-model-item label="Activity name">
          <a-input v-model={_value.name} />
        </a-form-model-item>

        <a-form-model-item label="Activity region">
          <a-input v-model={_value.region} />
        </a-form-model-item>

        <a-form-model-item wrapper-col={{ span: 14, offset: 4 }}>
          <a-button type="primary" onClick={onClick}>
            Create
          </a-button>
          <a-button style="margin-left: 10px;">Cancel</a-button>
        </a-form-model-item>
      </a-form-model>
    ) : (
      ''
    )
    return (
      <div>
        {Form}
        {this._value}
      </div>
    )
  }
}
dynamicForm.install = function (Vue) {
  Vue.component(dynamicForm.name, dynamicForm)
}
export default dynamicForm
