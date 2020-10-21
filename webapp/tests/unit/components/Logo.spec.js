import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo';

describe('Logo.vue', () => {
  it('renders Logo component', () => {
    const wrapper = shallowMount(Logo);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
