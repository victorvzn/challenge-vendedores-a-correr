import { shallowMount } from '@vue/test-utils'
import PageHome from '@/components/home/PageHome.vue'

describe('PageHome.vue', () => {
  test('Should be render PageHome', () => {
    const title = 'Vendedores ¡a correr!'
    const button = '¡Vota por tu favorito aquí!'

    const wrapper = shallowMount(PageHome)

    expect(wrapper.text()).toMatch(title)
    expect(wrapper.text()).toMatch(button)
  })
})
