import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/Loader';

describe('Loader.vue', () => {
  it('renders Loader component', () => {
    const wrapper = shallowMount(Loader);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('passes correct icon, spin directive and size to FontAwesomeIcon', () => {
    const wrapper = shallowMount(Loader);

    const icon = wrapper.find('font-awesome-icon');

    expect(icon.exists()).toBe(true);
    expect(icon.attributes('icon')).toBe('spinner');
    expect(icon.attributes('spin')).toBeDefined();
    expect(icon.attributes('size')).toBe('4x');
  });
});
