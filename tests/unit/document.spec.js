import { shallowMount } from '@vue/test-utils'
import Document from '../../src/components/Document.vue'

describe('Document', () => {
  it('When adding a new Document, the name is rendered', () => {
    const name = 'New Document Name';
    const wrapper = shallowMount(Document, {
      props: { name: "New Document Name" },
    })
    expect(wrapper.html()).toContain(name)
  })

  it('If edit event is emitted on button press', () => {
    const wrapper = shallowMount(Document, {
      props: { uid: "some-uid" },
    })
    wrapper.findAll('button').filter(it => it.text() === 'Edit')[0].trigger('click')
    expect(wrapper.emitted().edit[0]).toEqual(['some-uid'])
  })

  it('If delete event is emitted on button press', () => {
    const wrapper = shallowMount(Document, {
      props: { uid: "some-uid" },
    })
    wrapper.findAll('button').filter(it => it.text() === 'Delete')[0].trigger('click')
    expect(wrapper.emitted().delete[0]).toEqual(['some-uid'])
  })

  it('If click event is emitted on dev press', () => {
    const wrapper = shallowMount(Document, {
      props: { uid: "some-uid" },
    })
    wrapper.findAll('.Document')[0].trigger('click')
    expect(wrapper.emitted().click[0]).toEqual(['some-uid'])
  })
})
