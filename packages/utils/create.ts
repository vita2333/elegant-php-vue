import {
  ComponentOptions,
  CreateElement,
  RenderContext,
  VNode,
  VueConstructor
} from 'vue'
import { DefaultProps, PropsDefinition } from 'vue/types/options'
import { isFunction } from './index'

function install (this: UIComponentOptions, Vue: VueConstructor) {
  const { name } = this
  Vue.component(name as string, this)
}

export type TsxComponent<Props, Events, Slots> = (props: Partial<Props & Events & Slots>) => VNode

export interface UIComponentOptions extends ComponentOptions<Vue> {
  /**
   * 之前创建的锚点标题组件是比较简单，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法。实际上，它只是一个接受一些 prop 的函数。在这样的场景下，我们可以将组件标记为 functional，这意味它无状态 (没有响应式数据)，也没有实例 (没有 this 上下文)。一个函数式组件就像这样：
   */
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

export type ScopedSlots = DefaultSlots & {
  [key: string]: ScopedSlot | undefined;
};

export type FunctionComponent<Props = DefaultProps,
  PropDefs = PropsDefinition<Props>> = {
  (
    h: CreateElement,
    props: Props,
    slots: ScopedSlots,
    context: RenderContext<Props>,
  ): VNode | undefined;
  props?: PropDefs;
};

// should be removed after Vue 3
function transformFunctionComponent (
  pure: FunctionComponent
): UIComponentOptions {
  return {
    functional: true,
    props: pure.props,
    render: (h, context): any =>
      pure(h, context.props, unifySlots(context), context)
  }
}

// unify slots & scopedSlots
function unifySlots (context: RenderContext) {
  // use data.scopedSlots in lower Vue version
  const scopedSlots = context.scopedSlots || context.data.scopedSlots || {}
  const slots = context.slots()

  Object.keys(slots).forEach(key => {
    if (!scopedSlots[key]) {
      scopedSlots[key] = () => slots[key]
    }
  })

  return scopedSlots
}

const prefix = 'epv-'

export function createComponent (name: string) {
  return function <Props = DefaultProps, Events = {}, Slots = {}> (sfc: UIComponentOptions | FunctionComponent) {
    if (isFunction(sfc)) {
      sfc = transformFunctionComponent(sfc)
    }
    sfc.name = prefix + name
    sfc.install = install
    return sfc
  }
}

export type ScopedSlot<Props = any> = (
  props?: Props,
) => VNode[] | VNode | undefined;

export type DefaultSlots = {
  default?: ScopedSlot;
};
