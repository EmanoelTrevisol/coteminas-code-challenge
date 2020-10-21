import Products from '@/modules/product/components/Products';
import ProductCard from '@/modules/product/components/ProductCard';
import { shallowMount } from '@vue/test-utils';
import mockedProducts from '@/modules/product/_mockedDBProducts/productsArray';

describe('Products.vue', () => {
  describe('renders Products.vue', () => {
    const build = (propsData) => {
      const wrapper = shallowMount(Products, {
        propsData: propsData || {
          products: [...mockedProducts],
        },
      });

      return wrapper;
    };

    it('should match snapshot', () => {
      const wrapper = build();
      expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render ProductCard', () => {
      const wrapper = build();

      const cards = wrapper.findAllComponents(ProductCard);

      expect(cards.length).toBe(mockedProducts.length);
    });

    it('should pass product prop correctly to ProductCard', () => {
      const baseProduct = mockedProducts[0];
      const wrapper = build({ products: [{ ...baseProduct }] });

      const cards = wrapper.findAllComponents(ProductCard);

      const card = cards.at(0);

      expect(cards.length).toBe(1);
      expect(card.vm.product).toStrictEqual({ ...baseProduct });
    });
  });
});
