import { shallowMount } from '@vue/test-utils'
import Document from '../../src/components/Document.vue'

describe('Document', () => {
  it('When adding a new Document, the name is rendered', () => {
    const name = 'New Document Name';
    const wrapper = shallowMount(Document, {
      props: { name: "New Document Name" },
    });
    console.log(wrapper.html())
    expect(wrapper.html()).toContain(name)
  });
});
