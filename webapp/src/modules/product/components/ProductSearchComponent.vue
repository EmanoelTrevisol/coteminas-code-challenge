<template>
  <div class="product-search-input">
    <font-awesome-icon class="search-icon" icon="search" @click="search" />
    <input
      class="search-input"
      type="text"
      placeholder="Buscar produtos"
      :value="filter"
      @input="(evt) => setSearchFilter(evt.target.value)"
    />
    <font-awesome-icon
      class="clear-icon"
      icon="times-circle"
      @click="clearFilter"
    />
  </div>
</template>

<script>
import { debounce } from 'lodash';
import { mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('product', {
      filter: (state) => state.filter,
    }),
  },
  methods: {
    setSearchFilter(val) {
      this.$store.dispatch('product/updateSearchFilter', val);
      this.getList();
    },
    getList: debounce(function() {
      this.$store.dispatch('product/getList');
    }, 600),
    clearFilter() {
      this.$store.dispatch('product/updateSearchFilter', '');
      this.search();
    },
    search() {
      this.$store.dispatch('product/getList');
    },
  },
};
</script>

<style lang="stylus" scoped>
.product-search-input {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid $medium;
	padding: 0px 10px;
	width: 500px;
	border-radius: 20px;

	.search-icon, .clear-icon {
		height: 20px;
    cursor: pointer;
    color: $medium;
	}

	.search-input {
    padding: 0 10px;
		height: 35px;
		border: none;
    width: 85%
    font-size: 1.2em;
    font-family: $ff-roboto;
    letter-spacing: 1.5px;
    font-weight: 100;
    color: $medium;

    &::placeholder {
      color: $medium;
    }

    &:focus {
      outline: none;
    }
	}
}
</style>
