import FileHandle from '../packages/dynamic-form/index'
import TestModule from '../packages/test-module/index'
import { version } from '../package.json'

const components = [FileHandle, TestModule]

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

export default { version, install, FileHandle, TestModule }
