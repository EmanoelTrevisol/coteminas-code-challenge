import mockedProducts from '../../_mockedDBProducts/productsArray';

const getList = jest.fn();

getList.mockResolvedValue({
  items: mockedProducts,
  total: mockedProducts,
});

export default {
  getList,
};
