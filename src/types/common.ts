import { Field as AField } from 'ant-design-vue/types/form/form'

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
  rules?: string[] | string | object[]
  required?: boolean
  hidden?: boolean
  disabled?: boolean
  desc?: string
  unit?: string | number
  placeholder?: string
  props?: Record<string, any>
}

export interface KeyValue {
  [x: string]: any
}

export interface Option {
  text: string
  val: string | number
  extra?: KeyValue
}
