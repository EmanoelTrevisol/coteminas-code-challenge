<template>
  <h1>{{ title }}</h1>
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

<style lang="stylus" scoped></style>
