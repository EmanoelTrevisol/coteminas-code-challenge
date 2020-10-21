<template>
  <div class="products-list">
    <div class="search-title">
      <product-list-title />
    </div>
    <div class="search-result">
      <div class="search-result-title">
        <product-list-result-number />
      </div>
      <div class="result-items">
        <loader v-if="$wait.is('loading-products')" />
        <products v-else-if="products.length" :products="products" />
        <empty-state v-else :text="emptyStateText"></empty-state>
      </div>
      <div class="pagination-footer">
        <pagination
          :total="total"
          :current-page.sync="currentPage"
          :per-page.sync="perPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductListResultNumber from '../../components/ProductListResultNumber';
import Products from '../../components/Products';
import ProductListTitle from '../../components/ProductListTitle';
import EmptyState from '@/components/EmptyState';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import { mapState, mapGetters } from 'vuex';

function generateComputed(propName) {
  return {
    get() {
      return this.$store.state.product[propName];
    },
    set(val) {
      return this.$store.dispatch('product/updateListData', {
        [propName]: val,
      });
    },
  };
}

export default {
  components: {
    ProductListResultNumber,
    ProductListTitle,
    Products,
    EmptyState,
    Loader,
    Pagination,
  },
  computed: {
    ...mapState('product', {
      total: (state) => state.total,
    }),
    ...mapGetters({
      products: 'product/list',
    }),
    filter: (() => generateComputed('filter'))(),
    currentPage: (() => generateComputed('currentPage'))(),
    perPage: (() => generateComputed('limit'))(),
    emptyStateText() {
      return `Não encontramos nenhum produto com o termo '${this.filter}'`;
    },
  },
  created() {
    this.$store.dispatch('product/getList');
  },
};
</script>

<style lang="stylus" scoped>
.products-list {
  margin-bottom: 50px;

  .search-result {
    width: 75%;
    margin: 0 auto;

    .result-items {
      margin-bottom: 15px;
    }
  }
}
h1 {
	color: red;
}
</style>
