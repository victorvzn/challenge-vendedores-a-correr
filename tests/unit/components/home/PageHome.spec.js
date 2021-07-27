import { shallowMount, createLocalVue } from '@vue/test-utils'
import PageHome from '@/components/page-home/PageHome.vue'
import VueRouter from 'vue-router'
import BaseButton from '@/components/shared/base/BaseButton.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('PageHome.vue', () => {
  test('Should be render PageHome', () => {
    // const titleText = 'Vendedores ¡a correr!'
    const buttonText = '¡Vota por tu favorito aquí!'

    const wrapper = shallowMount(PageHome, { localVue })

    const Button = wrapper.findComponent(BaseButton)

    expect(Button.text()).toMatch(buttonText)
  })
})
