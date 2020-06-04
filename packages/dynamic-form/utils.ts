import { FieldTypes } from '@/types/enum'

export const InputTypeMap = {
  // base component from UI
  [FieldTypes.text]: 'AInput',
  [FieldTypes.number]: 'AInputNumber',
  [FieldTypes.textarea]: 'ATextarea',
  [FieldTypes.password]: 'AInputPassword',
  [FieldTypes.switch]: 'ASwitch',
  [FieldTypes.date]: 'ADatePicker',
  [FieldTypes.checkers]: 'ACheckboxGroup',
  // custom component
  [FieldTypes.radio]: () =>
    import(/* webpackChunkName: 'form-basic' */ './components/DyRadioGroup.vue')
}
