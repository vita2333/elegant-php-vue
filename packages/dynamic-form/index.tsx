import './index.css'
import { CreateElement, RenderContext } from 'vue'
import { createComponent, DefaultSlots, ScopedSlot } from '../utils/create'
import { DefaultProps } from 'vue/types/options'

const createFunc = createComponent('dynamic-form')
console.log('======================')
console.log('dynamicForm:')
console.log('======================')

export type DynamicFormProps = {
  form?: string
}

export type DynamicFormSlots = DefaultSlots & {
  top?: ScopedSlot
}

function dynamicForm (
  h: CreateElement,
  props: DynamicFormProps,
  slots: DynamicFormSlots,
  ctx: RenderContext<DefaultProps>) {
  return (
    <div class={ 'dynamic-form' }>
      <h1>component-jsx</h1>
      <p>{ props.form }</p>
      { slots.default?.() }
    </div>)
}

export default createFunc(dynamicForm)
