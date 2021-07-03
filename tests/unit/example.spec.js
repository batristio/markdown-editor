import { shallowMount } from '@vue/test-utils';

describe('', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
