const getPriceWithDiscount = (price: number | undefined = 0, discount?: number) => {
  let discountPrice = discount ? price / 100 * (100 - discount) : price;

  return Math.round(discountPrice);
};

export default getPriceWithDiscount;