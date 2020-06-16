import DynamicForm from '../packages/dynamic-form/index'
import { version } from '../package.json'

const components = [DynamicForm]

const install = function (Vue) {
  if (install.installed) {
    return
  }
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { version, install, DynamicForm }
