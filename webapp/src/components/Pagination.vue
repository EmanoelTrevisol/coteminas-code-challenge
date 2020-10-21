<template>
  <div class="pagination">
    <div class="per-page-options">
      <select
        name="per-page"
        id="per-page"
        @change="(evt) => $emit('update:perPage', parseInt(evt.target.value))"
      >
        <option
          v-for="option in perPageOptions"
          :value="option"
          :key="option"
          :selected="option === perPage"
        >
          {{ option }} produtos por página
        </option>
      </select>
    </div>
    <div class="page-options">
      <span
        class="first-page"
        :class="{ disabled: !canGoToPreviousPage() }"
        @click="firstPage"
      >
        <font-awesome-icon icon="angle-double-left"></font-awesome-icon>
      </span>
      <span
        class="previous-page"
        :class="{ disabled: !canGoToPreviousPage() }"
        @click="previousPage"
      >
        <font-awesome-icon icon="angle-left"></font-awesome-icon>
      </span>
      <span
        v-for="pageOption in pageOptions.previous"
        :key="pageOption"
        class="option"
        @click="onPageClick(pageOption)"
      >
        {{ pageOption }}
      </span>
      <span class="option selected">
        {{ currentPage }}
      </span>
      <span
        v-for="pageOption in pageOptions.next"
        :key="pageOption"
        class="option"
        @click="onPageClick(pageOption)"
      >
        {{ pageOption }}
      </span>
      <span
        class="next-page"
        :class="{ disabled: !canGoToNextPage() }"
        @click="nextPage"
      >
        <font-awesome-icon icon="angle-right"></font-awesome-icon>
      </span>
      <span
        class="last-page"
        :class="{ disabled: !canGoToNextPage() }"
        @click="lastPage"
      >
        <font-awesome-icon icon="angle-double-right"></font-awesome-icon>
      </span>
    </div>
  </div>
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
      default: 1,
    },
    perPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      perPageOptions: [10, 25, 50, 100],
    };
  },
  computed: {
    totalPages() {
      return (
        (this.total && this.perPage && Math.ceil(this.total / this.perPage)) ||
        0
      );
    },
    pageOptions() {
      const previous = [];
      const next = [];

      const { prevLength, nextLength } = this.getOptionsLength();

      for (
        let i = this.currentPage - 1;
        i >= this.currentPage - prevLength;
        i--
      ) {
        if (i < 1) continue;
        previous.unshift(i);
      }

      for (
        let i = this.currentPage + 1;
        i <= this.currentPage + nextLength;
        i++
      ) {
        if (i > this.totalPages) continue;
        next.push(i);
      }

      return {
        previous,
        next,
      };
    },
  },
  methods: {
    getOptionsLength() {
      const opts = {};
      const leftPagesToLast = this.totalPages - this.currentPage;

      if (this.currentPage < 4) {
        opts.prevLength = this.currentPage - 1;
        opts.nextLength = 6 - this.currentPage;
      } else if (leftPagesToLast < 4) {
        opts.prevLength = 6 - leftPagesToLast;
        opts.nextLength = leftPagesToLast;
      } else {
        opts.prevLength = 3;
        opts.nextLength = 3;
      }

      return opts;
    },
    onPageClick(pageNumber) {
      this.$emit('update:currentPage', pageNumber);
    },
    canGoToNextPage() {
      return !!this.pageOptions.next.length;
    },
    canGoToPreviousPage() {
      return !!this.pageOptions.previous.length;
    },
    nextPage(evt) {
      if (this.canGoToNextPage()) {
        this.$emit('update:currentPage', this.currentPage + 1);
      } else {
        evt.stopPropagation();
        evt.preventDefault();
      }
    },
    lastPage(evt) {
      if (this.canGoToNextPage()) {
        this.$emit('update:currentPage', this.totalPages);
      } else {
        evt.stopPropagation();
        evt.preventDefault();
      }
    },
    previousPage(evt) {
      if (this.canGoToNextPage()) {
        this.$emit('update:currentPage', this.currentPage - 1);
      } else {
        evt.stopPropagation();
        evt.preventDefault();
      }
    },
    firstPage(evt) {
      if (this.canGoToNextPage()) {
        this.$emit('update:currentPage', 1);
      } else {
        evt.stopPropagation();
        evt.preventDefault();
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .per-page-options {

  }

  .page-options {
    span.option {

    }
  }
}
</style>
