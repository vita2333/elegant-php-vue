import './index.css'
import { CreateElement, RenderContext } from 'vue'
import { createComponent, DefaultSlots } from '../utils/create'
import { DefaultProps } from 'vue/types/options'
import { Form } from 'ant-design-vue'

const createFunc = createComponent('dynamic-form')

export type DynamicFormProps = {
  form?: string
}

export type DynamicFormSlots = DefaultSlots & {
}

function dynamicForm (
  h: CreateElement,
  props: Form,
  slots: DynamicFormSlots,
  ctx: RenderContext<DefaultProps>) {
  return (
    <a-form>
      <a-form-item label="Plain Text">
        <span class="ant-form-text">
        China
        </span>
      </a-form-item>
      <a-form-item label="Select" has-feedback>
        <a-select
          v-decorator="[
          'select',
          { rules: [{ required: true, message: 'Please select your country!' }] },
        ]"
          placeholder="Please select a country"
        >
          <a-select-option value="china">
            China
          </a-select-option>
          <a-select-option value="usa">
            U.S.A
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  )
}

dynamicForm.props = {
  form: { type: Object, required: true }
}

export default createFunc<Form>(dynamicForm)
