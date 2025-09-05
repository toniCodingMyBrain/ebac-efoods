export const getTotalPrice = (items: Food[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += Number(currentItem.preco));
    }
    return 0;
  }, 0);
};
