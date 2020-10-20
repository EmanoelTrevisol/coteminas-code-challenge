import Vue from 'vue';
import Vuex from 'vuex';
import { store as product } from './modules/product';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    product,
  },

  state: {},
  mutations: {},
  actions: {},
});

// eslint-disable-next-line
if (module.hot) {
  // eslint-disable-next-line
  module.hot.accept(['@/modules/product/store'], () => {
    store.hotUpdate({
      modules: {
        product: require('@/modules/product/store').default,
      },
    });
  });
}

export default store;
