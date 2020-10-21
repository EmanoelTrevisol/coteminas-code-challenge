function sanitizeItem(product) {
  return {
    ...product,
    price: product.price.toLocaleString('pt-BR', { currency: 'BRL' }),
    offerPrice: product.offerPrice
      ? product.offerPrice.toLocaleString('pt-BR', { currency: 'BRL' })
      : undefined,
  };
}

export default {
  list(state) {
    return (state.items || []).map(sanitizeItem);
  },
};
