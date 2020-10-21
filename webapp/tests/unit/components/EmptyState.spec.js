import { shallowMount } from '@vue/test-utils';
import EmptyState from '@/components/EmptyState';

describe('EmptyState.vue', () => {
  it('renders EmptyState component', () => {
    const wrapper = shallowMount(EmptyState);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders default text correctly', () => {
    const text = 'Nenhum resultado para sua pesquisa foi encontrado';

    const wrapper = shallowMount(EmptyState, {
      propsData: {
        text,
      },
    });

    const textWrapper = wrapper.find('.text');

    expect(textWrapper.exists()).toBe(true);
    expect(textWrapper.text()).toBe(text);
  });

  it('renders prop text correctly', () => {
    const text = 'Nada encontrado!';

    const wrapper = shallowMount(EmptyState, {
      propsData: {
        text,
      },
    });

    const textWrapper = wrapper.find('.text');

    expect(textWrapper.exists()).toBe(true);
    expect(textWrapper.text()).toBe(text);
  });
});
