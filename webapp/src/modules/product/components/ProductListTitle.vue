<template>
  <div class="product-list-title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.product.filter || 'Lista de produtos';
    },
  },
};
</script>

<style lang="stylus" scoped>
.product-list-title {
  background-color: $light;
  padding: 30px;

  h1 {
    margin: 0;
    font-family: $ff-roboto;
    font-weight: 100;
    font-size: 3rem;
    letter-spacing: 2px;
  }
}
</style>
