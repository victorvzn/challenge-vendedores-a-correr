import { shallowMount } from '@vue/test-utils'
import ImageWinner from '@/components/shared/images/ImageWinner'
import PageHome from '@/views/PageHome'
import BaseButton from '@/components/shared/base/BaseButton'

describe('PageHome.vue', () => {
  const build = () => {
    const wrapper = shallowMount(PageHome)

    return {
      wrapper,
      ImageWinner: () => wrapper.findComponent(ImageWinner),
      p: () => wrapper.find('p'),
      BaseButton: () => wrapper.findComponent(BaseButton)
    }
  }

  it('should renders the component', () => {
    // Arrange
    const wrapper = shallowMount(PageHome)

    // Assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should renders the right', () => {
    // Arrange
    const { ImageWinner, p, BaseButton } = build()

    // Assert
    expect(ImageWinner().exists()).toBe(true)
    expect(p().exists()).toBe(true)
    expect(BaseButton().exists()).toBe(true)
  })
})
