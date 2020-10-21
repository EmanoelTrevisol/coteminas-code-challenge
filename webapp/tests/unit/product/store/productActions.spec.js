jest.mock('@/modules/product/api');
import actions from '../../../../src/modules/product/store/productActions';
import mockedProducts from '@/modules/product/_mockedDBProducts/productsArray';
import productApi from '@/modules/product/api';

let commit;
let dispatch;
let state;

// TODO: test $toast call on api error;

beforeEach(() => {
  commit = jest.fn();
  dispatch = jest.fn();
  state = {
    limit: 25,
    currentPage: 2,
    items: [],
    total: 132,
    filter: 'filtro de pesquisa',
  };
});

describe('productActions.js', () => {
  describe('updateListData', () => {
    it('should call commit with the updated data', () => {
      const data = {
        items: [...mockedProducts],
        total: mockedProducts.length,
      };

      actions.updateListData({ commit }, data);

      expect(commit).toHaveBeenCalledWith('updateListData', data);
    });
  });

  describe('updateSearchFilter', () => {
    it('should call commit with the new filter data', () => {
      const newFilter = 'este é o novo filtro';

      actions.updateSearchFilter({ commit }, newFilter);
      const calledFn = commit.mock.calls[0];

      expect(calledFn[0]).toBe('updateListData');
      expect(calledFn[1]).toStrictEqual({ filter: newFilter });
    });
  });

  describe('getList', () => {
    it('should call dispatch to wait/start and wait/end', async () => {
      await actions.getList({ commit, dispatch, state });

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(
        1,
        'wait/start',
        'loading-products',
        {
          root: true,
        }
      );
      expect(dispatch).toHaveBeenNthCalledWith(
        2,
        'wait/end',
        'loading-products',
        {
          root: true,
        }
      );
    });

    it('should call api.getList', async () => {
      await actions.getList({ commit, dispatch, state });

      expect(productApi.getList).toBeCalledWith({
        limit: 25,
        page: 2,
        filter: 'filtro de pesquisa',
      });
    });

    it('should call commit with api response', async () => {
      await actions.getList({ commit, dispatch, state });

      expect(productApi.getList).toBeCalledWith({
        limit: 25,
        page: 2,
        filter: 'filtro de pesquisa',
      });
    });
  });
});
