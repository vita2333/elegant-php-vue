const Component = {
  name: 'DynamicForm',
  render() {
    return (
      <div class={'component-jsx'}>
        <h1>component-jsx</h1>
      </div>
    )
  }
}

Component.install = (vue) => {
  vue.component(Component.name, Component)
}

export default Component
