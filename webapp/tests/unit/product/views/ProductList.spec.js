import VueWait from 'vue-wait';
import Vuex from 'vuex';
import flushPromises from 'flush-promises';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductList from '@/modules/product/views/list/ProductList';
import ProductListResultNumber from '@/modules/product/components/ProductListResultNumber';
import Products from '@/modules/product/components/Products';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import EmptyState from '@/components/EmptyState';
import mockProducts from '@/modules/product/_mockedDBProducts/productsArray';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueWait);

describe('ProductList.vue', () => {
  const build = (state, actions, mutations) => {
    const store = new Vuex.Store({
      modules: {
        product: {
          namespaced: true,
          state: state || {
            items: [],
            total: 0,
          },
          actions: actions || {},
          mutations: mutations || {},
          getters: {
            list(state) {
              return state.items;
            },
          },
        },
      },
    });

    const wrapper = shallowMount(ProductList, {
      localVue,
      store,
      wait: new VueWait({
        useVuex: true,
      }),
    });

    return {
      wrapper,
      store,
    };
  };

  describe('render page components correctly depending on list data', () => {
    it('[ProductListResultNumber, Products, Pagination] with list data not empty', () => {
      const { wrapper } = build({
        items: mockProducts,
        total: mockProducts.length,
      });

      const productListResultNumber = wrapper.findComponent(
        ProductListResultNumber
      );
      const products = wrapper.findComponent(Products);
      const pagination = wrapper.findComponent(Pagination);

      expect(productListResultNumber.exists()).toBe(true);
      expect(products.exists()).toBe(true);
      expect(pagination.exists()).toBe(true);
    });

    it('[Loader, Pagination, ProductListResultNumber] and not Products with list data loading', async () => {
      const { wrapper, store } = build({
        items: mockProducts,
        total: mockProducts.length,
      });

      await store.dispatch('wait/start', 'loading-products');

      const productListResultNumber = wrapper.findComponent(
        ProductListResultNumber
      );
      const products = wrapper.findComponent(Products);
      const pagination = wrapper.findComponent(Pagination);
      const loader = wrapper.findComponent(Loader);

      await flushPromises();

      expect(productListResultNumber.exists()).toBe(true);
      expect(pagination.exists()).toBe(true);
      expect(loader.exists()).toBe(true);
      expect(products.exists()).toBe(false);

      await store.dispatch('wait/end', 'loading-products');
    });

    it('[EmptyState, Pagination, ProductListResultNumber] and not [Products, Loader] with empty list data', () => {
      const { wrapper } = build({
        items: [],
        total: 0,
      });

      const productListResultNumber = wrapper.findComponent(
        ProductListResultNumber
      );

      const products = wrapper.findComponent(Products);
      const pagination = wrapper.findComponent(Pagination);
      const loader = wrapper.findComponent(Loader);
      const emptyState = wrapper.findComponent(EmptyState);

      expect(productListResultNumber.exists()).toBe(true);
      expect(pagination.exists()).toBe(true);
      expect(emptyState.exists()).toBe(true);
      expect(loader.exists()).toBe(false);
      expect(products.exists()).toBe(false);
    });
  });

  describe('treats state data correctly', () => {
    it('passes list from getters to Products', () => {
      const { wrapper, store } = build({
        items: mockProducts,
        total: mockProducts.length,
      });

      const products = wrapper.findComponent(Products);
      const list = store.getters['product/list'];

      expect(products.exists()).toBe(true);
      expect(products.props('products')).toBe(list);
    });

    it('passes parameters to Pagination', () => {
      const currentPage = 2;
      const total = mockProducts.length;
      const limit = 25;

      const { wrapper } = build({
        items: mockProducts,
        total,
        currentPage,
        limit,
      });

      const pagination = wrapper.findComponent(Pagination);

      expect(pagination.exists()).toBe(true);
      expect(pagination.props('currentPage')).toBe(currentPage);
      expect(pagination.props('total')).toBe(total);
      expect(pagination.props('perPage')).toBe(limit);
    });

    it('passes text prop to EmptyState ', () => {
      const filter = 'testando parâmetro';
      const text = `Não encontramos nenhum produto com o termo '${filter}'`;
      const { wrapper } = build({
        items: [],
        total: 0,
        filter,
      });

      const emptyState = wrapper.findComponent(EmptyState);

      expect(emptyState.exists()).toBe(true);
      expect(emptyState.props('text')).toBe(text);
    });

    it('send pagination data to store correctly', () => {
      const currentPage = 2;
      const total = mockProducts.length;
      const limit = 25;
      const newCurrentPage = 3;
      const newLimit = 100;

      const { wrapper, store } = build({
        items: mockProducts,
        total,
        currentPage,
        limit,
      });

      store.dispatch = jest.fn();

      const pagination = wrapper.findComponent(Pagination);

      pagination.vm.$emit('update:currentPage', newCurrentPage);
      pagination.vm.$emit('update:perPage', newLimit);

      expect(store.dispatch).toHaveBeenNthCalledWith(
        1,
        'product/updateListData',
        { currentPage: newCurrentPage }
      );
      expect(store.dispatch).toHaveBeenNthCalledWith(
        2,
        'product/updateListData',
        { limit: newLimit }
      );
    });
  });
});
