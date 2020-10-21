<template>
  <div class="empty-state">
    <h4>Ops... não tem nada por aqui...</h4>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Nenhum resultado para sua pesquisa foi encontrado',
    },
  },
};
</script>

<style lang="stylus" scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
