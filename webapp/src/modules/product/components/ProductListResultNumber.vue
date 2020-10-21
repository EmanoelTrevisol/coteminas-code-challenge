<template>
  <h3 class="result-number">{{ resultString }}</h3>
</template>

<script>
export default {
  computed: {
    resultString() {
      const total = this.$store.state.product.total;
      if (total === 0) return 'nenhum produto encontrado';
      else if (total === 1) return '1 produto encontrado';
      else return `${total} produtos encontrados`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.result-number {
  font-size: 1.3em;
  width: 250px;
  border-bottom: 3px solid $brand-secondary;
  margin-bottom: 15px;
  padding: 5px 0 8px 0;
}
</style>
