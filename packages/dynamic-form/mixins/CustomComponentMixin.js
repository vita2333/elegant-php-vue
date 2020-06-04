export default {
  props: {
    value: {
      type: [String, Boolean, Object, Number]
    }
  },
  computed: {
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    _props () {
      return this.$attrs
    }
  }
}
