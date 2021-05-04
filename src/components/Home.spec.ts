import { mount } from '@vue/test-utils'
import Home from './Home.vue'

describe('Home', () => {
  it('should exist', () => {
    const wrapper = mount(Home, {})
    expect(wrapper.element).toBeTruthy()
  })
})