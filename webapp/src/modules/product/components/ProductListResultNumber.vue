<template>
  <h4>{{ resultString }}</h4>
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
