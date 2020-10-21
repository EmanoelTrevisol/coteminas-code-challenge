<template>
  <div class="product-page-header">
    <logo />
    <product-search-component />
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import ProductSearchComponent from './ProductSearchComponent';

export default {
  components: {
    Logo,
    ProductSearchComponent,
  },
};
</script>

<style lang="stylus" scoped>
.product-page-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
</style>
