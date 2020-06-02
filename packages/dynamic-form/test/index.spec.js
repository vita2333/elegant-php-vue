import { mount, shallowMount } from '@vue/test-utils'
import component from '../index'

describe('dynamic-form props', () => {
  it('renders props.msg when passed', () => {
    const message = 'new message'
    const wrapper = shallowMount(component, {
      propsData: { message }
    })
    // 正则匹配toMatch
    expect(wrapper.text()).toMatch(message)
  })
})

describe('HelloWorld is a Vue instance', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(component)
    // toBeTruthy 只判断是否为boolean true
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
