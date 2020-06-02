import Vue, { CreateElement } from 'vue'
import { mount } from '@vue/test-utils'
import { later } from '../packages/utils'
import UI from '@/index'
import Antd from 'ant-design-vue'

Vue.use(Antd)
Vue.use(UI)

const Empty = {
  render (h: CreateElement): ReturnType<CreateElement> {
    return h('div', [(this as any).$slots.default])
  },
  inheritAttrs: false
}

Vue.component('demo-block', Empty)
Vue.component('demo-section', Empty)

export function snapshotDemo (Demo: any, option: any = {}) {
  test('renders demo correctly', async () => {
    if (option.beforeTest) {
      option.beforeTest()
    }

    const wrapper = mount(Demo)

    await later()

    expect(wrapper).toMatchSnapshot()

    if (option.afterTest) {
      option.afterTest()
    }
  })
}
