<template>
  <div class="products">
    <product-card
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard';

export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
