import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductListTitle from '@/modules/product/components/ProductListTitle';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product: {
      namespaced: true,
      state: {
        filter: '',
      },
      mutations: {
        // mocked function to test component filter update
        changeFilter(state, val) {
          state.filter = val;
        },
      },
    },
  },
});

describe('ProductListTitle.vue', () => {
  const build = () => {
    const wrapper = shallowMount(ProductListTitle, {
      localVue,
      store,
    });

    return wrapper;
  };
  it('renders component', () => {
    const wrapper = build();

    expect(wrapper.text()).toMatchSnapshot();
  });

  it('has default title with no filter specified', () => {
    const wrapper = build();

    const h1 = wrapper.find('h1');

    expect(h1.element.innerHTML).toBe('Lista de produtos');
  });

  it('changes title when state changes', async () => {
    const wrapper = build();
    const newTitle = 'Travesseiros';

    store.commit('product/changeFilter', newTitle);

    await localVue.nextTick();
    const h1 = wrapper.find('h1');

    expect(h1.element.innerHTML).toBe(newTitle);
  });
});
