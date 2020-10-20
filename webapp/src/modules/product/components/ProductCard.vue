<template>
  <div class="product">
    <h5>{{ product.title }}</h5>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
