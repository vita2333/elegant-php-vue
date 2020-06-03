import { Field as AField } from 'ant-design-vue/types/form/form'
import { TreeData } from 'ant-design-vue/types/tree-select'

export interface List {
  items: any[]
  _meta: Pagination
}

export interface Pagination {
  currentPage: number
  pageCount?: number
  perPage?: number
  totalCount?: number
}

export interface ServerPagination {
  page: number
  'per-page'?: number
}

export interface Column {
  title: string
  dataIndex?: string
  customRender?: (value: any, record: any) => any
  scopedSlots?: {
    customRender: string
  }
  sorter?: boolean
  defaultSortOrder?: string
  fixed?: string
  align?: string
  width?: number
}

export type Field =
  | BaseField
  | CodeField
  | SwitchField
  | ImgField
  | PickerField
  | TreeField

export interface Fields {
  [name: string]: Field
}

export interface ViewFields {
  [name: string]: BaseField | { filter: string }
}

// tslint:disable-next-line:no-empty-interface
export interface AntField extends AField {}

export interface BaseField {
  label?: string
  type: string
  rules?: string[] | string
  hidden?: boolean
  disabled?: boolean
  desc?: string
  unit?: string | number
  placeholder?: string
  depends?: string[]
  dependsFunc?: (values: string[]) => boolean | null
}

export interface KeyValue {
  [x: string]: any
}

export interface CodeField extends BaseField {
  mobileField: string
  sendFunc: (mobile: string) => Promise<any>
}

export interface SwitchField extends BaseField {
  activeValue?: any
  inactiveValue?: any
}

export interface ImgField extends BaseField {
  maxPic: number
}

export interface PickerField extends BaseField {
  options: Option[] | KeyValue | Promise<any>
}

export interface TreeField extends BaseField {
  treeData: (TreeData | { title: string })[]
}

export interface Option {
  text: string
  val: string | number
  extra?: KeyValue
}
