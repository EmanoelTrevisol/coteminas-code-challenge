<template>
  <p>this is the pagination</p>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
};
</script>
