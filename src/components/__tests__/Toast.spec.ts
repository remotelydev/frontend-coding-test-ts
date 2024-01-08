import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Toast from '../Toast.vue'

describe('Toast', () => {
  const messageText = 'Hi! I am a Toast'

  it('render Toast correctly', async () => {
    const wrapper = mount(Toast, {
      props: {
        message: messageText,
        trigger: true,
      },
    })

    expect(wrapper.text()).toBe(messageText)
  })
})
