const getPriceWithDiscount = (price: number, discount?: number) => {
  return discount ? price / 100 * (100 - discount) : price;
};

export default getPriceWithDiscount;