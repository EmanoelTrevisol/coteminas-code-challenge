<template>
  <div class="product-card">
    <div class="images">
      <div
        class="image"
        v-for="(image, key) in product.images"
        :key="`image-${key}-${product._id}`"
      >
        <img :src="image" :alt="`Imagem ${key} do produto ${product.title}`" />
      </div>
    </div>
    <div class="info">
      <div class="title">
        <div class="product-name">
          {{ product.title }}
        </div>
        <small class="product-type-size">
          {{ product.type }} | {{ product.size }}
        </small>
      </div>
      <p class="price">
        <small v-if="product.offerPrice" class="original">
          <span class="currency">
            {{ product.price }}
          </span>
          por
        </small>
        {{ product.offerPrice || product.price }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="stylus" scoped>
.product-card {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid $light;

  .images {
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .image {
      width: 96px;
      height: 96px;
      margin: 5px;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 20px;

    .title {
      .product-name {
        color: $dark;
        font-size: 1.1em;
      }

      .product-type-size {
        color: $medium;
      }
    }

    .price {
      font-size: 1.1em;
      text-align: end;
      .original {
        color: $medium;
        .currency {
          text-decoration: line-through;
        }
      }

      .main {
        color: $medium;
      }
    }
  }
}
</style>
