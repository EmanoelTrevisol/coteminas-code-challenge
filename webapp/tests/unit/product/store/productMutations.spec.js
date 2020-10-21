import mutations from '../../../../src/modules/product/store/productMutations';
import mockedProducts from '@/modules/product/_mockedDBProducts/productsArray';

describe('productMutations.js', () => {
  describe('updateListData', () => {
    it('should update state items and total', () => {
      const state = {
        limit: 10,
        currentPage: 1,
        items: [],
        total: 0,
        filter: '',
      };
      const total = 42;
      const items = [...mockedProducts];

      mutations.updateListData(state, { items, total });

      expect(state.limit).toBe(state.limit);
      expect(state.currentPage).toBe(state.currentPage);
      expect(state.filter).toBe(state.filter);
      expect(state.items).toStrictEqual(items);
      expect(state.total).toStrictEqual(total);
    });

    it('should update currentPage', () => {
      const state = {
        limit: 10,
        currentPage: 1,
        items: [],
        total: 0,
        filter: '',
      };
      const currentPage = 2;

      mutations.updateListData(state, { currentPage });

      expect(state.limit).toBe(10);
      expect(state.filter).toBe('');
      expect(state.items).toStrictEqual(state.items);
      expect(state.total).toStrictEqual(state.total);
      expect(state.currentPage).toBe(currentPage);
    });

    it('should update limit', () => {
      const state = {
        limit: 10,
        currentPage: 1,
        items: [],
        total: 0,
        filter: '',
      };
      const limit = 2;

      mutations.updateListData(state, { limit });

      expect(state.filter).toBe(state.filter);
      expect(state.items).toStrictEqual(state.items);
      expect(state.total).toStrictEqual(state.total);
      expect(state.currentPage).toBe(state.currentPage);
      expect(state.limit).toBe(limit);
    });

    it('should update filter', () => {
      const state = {
        limit: 10,
        currentPage: 1,
        items: [],
        total: 0,
        filter: '',
      };
      const filter = 2;

      mutations.updateListData(state, { filter });

      expect(state.limit).toBe(state.limit);
      expect(state.items).toStrictEqual(state.items);
      expect(state.total).toStrictEqual(state.total);
      expect(state.currentPage).toBe(state.currentPage);
      expect(state.filter).toBe(filter);
    });
  });
});
