import './index.css'
import { CreateElement, RenderContext } from 'vue'
import { createComponent, DefaultSlots } from '../utils/create'
import { DefaultProps } from 'vue/types/options'

const createFunc = createComponent('dynamic-form')
console.log('======================')
console.log('dynamicForm:')
console.log('======================')

function dynamicForm (
  h: CreateElement,
  props: DefaultProps,
  slots: DefaultSlots,
  ctx: RenderContext<DefaultProps>) {
  return (
    <div class={ 'dynamic-form' }>
      <h1>component-jsx</h1>
    </div>)
}

export default createFunc(dynamicForm)
