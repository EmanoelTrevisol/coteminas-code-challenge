import { size, type } from '../filter';

function sanitizeItem(product) {
  return {
    ...product,
    type: type(product.type),
    size: size(product.size),
    price: product.price.toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }),
    offerPrice: product.offerPrice
      ? product.offerPrice.toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        })
      : undefined,
  };
}

export default {
  list(state) {
    return (state.items || []).map(sanitizeItem);
  },
};
