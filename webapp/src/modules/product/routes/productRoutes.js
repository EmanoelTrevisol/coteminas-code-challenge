import ProductList from '../views/list/ProductList';
import ProductPageHeader from '../components/ProductPageHeader';

export default [
  {
    path: '/',
    name: 'product-list',
    components: {
      header: ProductPageHeader,
      default: ProductList,
    },
  },
];
