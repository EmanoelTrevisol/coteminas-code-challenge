<template>
  <div class="empty-state">
    <h3>Ops... não tem nada por aqui</h3>
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

  h3 {
    font-size: 1.3em;
    font-family: $ff-roboto;
    margin: 10px;
  }

  p {
    margin: 10px;
    font-size: 1.1em;
  }
}
</style>
