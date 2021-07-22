import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import DocumentNavigation from '../../src/components/DocumentNavigation.vue'

describe('DocumentNavigation', () => {
  let store
  beforeEach(() => {
    store = createStore({
      
    })
  })

  it('When adding a new Document, the name is rendered', () => {
    const name = 'New Document Name';
    const wrapper = shallowMount(Document, {
      props: { name: "New Document Name" },
    })
    expect(wrapper.html()).toContain(name)
  })
})