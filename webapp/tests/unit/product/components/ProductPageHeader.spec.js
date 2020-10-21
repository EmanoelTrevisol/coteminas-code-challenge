import { shallowMount } from '@vue/test-utils';
import ProductPageHeader from '@/modules/product/components/ProductPageHeader';
import ProductSearchComponent from '@/modules/product/components/ProductSearchComponent';
import Logo from '@/components/Logo';

describe('ProductPageHeader.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(ProductPageHeader);

    expect(wrapper.text()).toMatchSnapshot();
  });

  it('renders logo and search', () => {
    const wrapper = shallowMount(ProductPageHeader);

    const logo = wrapper.findComponent(Logo);
    const productSearch = wrapper.findComponent(ProductSearchComponent);

    expect(logo.exists()).toBe(true);
    expect(productSearch.exists()).toBe(true);
  });
});
