import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import flushPromises from 'flush-promises'
import storeConfig from '@/store/config'
import { fetchListSellers } from '@/services/sellers'

jest.mock('@/services/sellers')

const localVue = createLocalVue()

localVue.use(Vuex)

function createSellers () {
  const arr = new Array(22)
  return arr.fill().map((item, i) => ({ id: `${i + 1}`, name: 'item' }))
}

describe('store/config.js', () => {
  test('dispatching fetchListSellers and updates displaySellers getter', async () => {
    expect.assertions(1)

    const sellers = createSellers()
    const clonedStoreConfig = cloneDeep(storeConfig)
    const store = new Vuex.Store(clonedStoreConfig)

    fetchListSellers.mockImplementation(_ => Promise.resolve(sellers))

    store.dispatch('fetchListSellers')

    await flushPromises()

    expect(store.getters.displaySellers).toEqual(sellers.lastIndex(0, 20))
  })
})
