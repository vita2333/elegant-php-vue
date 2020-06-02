import './index.css'

console.log('======================')
console.log('dynamicForm:')
console.log('======================')

function render (h: any) {
  return (
    <div class={ 'dynamic-form' }>
      <h1>component-jsx</h1>
    </div>)
}

const Component: any = {
  name: 'DynamicForm',
  render
}

Component.install = (vue: any) => {
  vue.component(Component.name, Component)
}

export default Component
