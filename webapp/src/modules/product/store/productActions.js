import productApi from '../api';

export default {
  updateListData({ commit }, data) {
    commit('updateListData', data);
  },

  updateSearchFilter({ commit }, filter) {
    commit('updateListData', { filter });
  },

  async getList({ commit, dispatch, state }) {
    try {
      dispatch('wait/start', 'loading-products', { root: true });
      const { limit, currentPage, filter } = state;

      const data = await productApi.getList({ limit, currentPage, filter });

      commit('updateListData', data);
    } catch (error) {
      throw error;
    } finally {
      dispatch('wait/end', 'loading-products', { root: true });
    }
  },
};
