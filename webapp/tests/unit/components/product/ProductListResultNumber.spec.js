import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductListResultNumber from '@/modules/product/components/ProductListResultNumber';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product: {
      namespaced: true,
      state: {
        filter: '',
        items: [],
        total: 0,
      },
      mutations: {
        // mocked function to test component filter update
        changeTotal(state, val) {
          state.total = val;
        },
      },
    },
  },
});

describe('ProductListResultNumber.vue', () => {
  const build = () => {
    const wrapper = shallowMount(ProductListResultNumber, {
      localVue,
      store,
    });

    return wrapper;
  };
  it('renders component', () => {
    const wrapper = build();

    expect(wrapper.text()).toMatchSnapshot();
  });

  it('no results found correct string', () => {
    const wrapper = build();

    const h4 = wrapper.find('h4');

    expect(h4.element.innerHTML).toBe('nenhum produto encontrado');
  });

  it('changes string correctly to plural when state changes to > 1 results', async () => {
    const wrapper = build();
    const total = 142;
    const newTitle = `${total} produtos encontrados`;

    store.commit('product/changeTotal', total);

    await localVue.nextTick();
    const h4 = wrapper.find('h4');

    expect(h4.element.innerHTML).toBe(newTitle);
  });

  it('changes string correctly with single result', async () => {
    const wrapper = build();
    const total = 1;
    const newTitle = `${total} produto encontrado`;

    store.commit('product/changeTotal', total);

    await localVue.nextTick();
    const h4 = wrapper.find('h4');

    expect(h4.element.innerHTML).toBe(newTitle);
  });
});
