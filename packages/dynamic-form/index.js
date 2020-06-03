import comp from './DynamicForm'

comp.install = (vue) => {
  vue.component(comp.name, comp)
}

export default comp
