import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DefaultView from '@/views/DefaultView.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(DefaultView)
    expect(wrapper.text()).toContain('Hello')
  })
})
