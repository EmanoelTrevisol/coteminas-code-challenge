<template>
  <p>{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Nenhum resultado foi encontrado',
    },
  },
};
</script>
