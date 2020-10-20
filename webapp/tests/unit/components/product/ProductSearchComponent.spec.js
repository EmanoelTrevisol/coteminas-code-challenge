import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import ProductSearchComponent from '@/modules/product/components/ProductSearchComponent';
import sinon from 'sinon';

let clock;
const filter = 'travesseiro';
// So vue won't try to render fontawesome component
Vue.config.ignoredElements = ['font-awesome-icon'];

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product: {
      namespaced: true,
      state: {
        filter,
      },
    },
  },
  state: {},
});

store.dispatch = jest.fn();

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

describe('ProductSearchComponent.vue', () => {
  const build = () => {
    const wrapper = shallowMount(ProductSearchComponent, {
      localVue,
      store,
    });

    return {
      wrapper,
    };
  };
  it('renders component', () => {
    const { wrapper } = build();

    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders search and clear icon', () => {
    const { wrapper } = build();

    const icons = wrapper.findAll('font-awesome-icon');

    const search = icons.at(0);
    const clear = icons.at(1);

    expect(icons).toHaveLength(2);
    expect(search.exists()).toBe(true);
    expect(clear.exists()).toBe(true);
    expect(search.attributes('icon')).toBe('search');
    expect(clear.attributes('icon')).toBe('times-circle');
  });

  it('renders search input', () => {
    const { wrapper } = build();

    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
    expect(input.attributes('placeholder')).toBe('Buscar produtos');
    expect(input.attributes('class')).toBe('search-input');
  });

  it('dispatches input data to the store', () => {
    const { wrapper } = build();

    wrapper.find('input').setValue('lençol');

    // product/getList action is inside a debounce function
    clock.tick(1000);

    expect(store.dispatch).toHaveBeenNthCalledWith(
      1,
      'product/updateSearchFilter',
      'lençol'
    );
    expect(store.dispatch).toHaveBeenNthCalledWith(2, 'product/getList');
  });

  it('renders input value', () => {
    const { wrapper } = build();

    const input = wrapper.find('input');

    expect(input.element.value).toBe(filter);
  });

  it('changes input value', () => {
    const getInputVal = () => input.element.value;
    const newVal = 'edredom';

    const { wrapper } = build();

    const input = wrapper.find('input');

    const oldVal = getInputVal();

    input.setValue(newVal);

    expect(oldVal).toBe(filter);
    expect(getInputVal()).toBe(newVal);
  });
});
