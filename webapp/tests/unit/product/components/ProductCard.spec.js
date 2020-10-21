import { shallowMount } from '@vue/test-utils';
import ProductCard from '@/modules/product/components/ProductCard';

describe('ProductCard.vue', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(ProductCard);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
