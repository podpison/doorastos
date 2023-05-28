const getPriceWithDiscount = (price: number | undefined = 0, discount?: number) => {
  return discount ? price / 100 * (100 - discount) : price;
};

export default getPriceWithDiscount;