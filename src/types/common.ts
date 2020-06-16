export interface Fields {
  [name: string]: Field
}

export interface Field {
  label?: string
  type: string
  rules?: string[] | string | object[]
  required?: boolean
  hidden?: boolean
  disabled?: boolean
  desc?: string
  unit?: string | number
  placeholder?: string
  attrs?: Record<string, any>
}
