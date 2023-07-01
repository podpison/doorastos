import { itemsAPI } from '@/firebase';
import { AdditionalProductOptionType, ProductType, ReviewItemType, StaticStateType, StockItemType } from '@/redux/reducers/static';
import type { NextApiRequest, NextApiResponse } from 'next';


const handler = async (req: NextApiRequest, res: NextApiResponse<StaticStateType>) => {
  let products = await itemsAPI.get('products') as ProductType[];
  let stock = await itemsAPI.get('stock') as StockItemType[];
  let reviews = await itemsAPI.get('reviews') as ReviewItemType[];
  let additionalProductOptions = await itemsAPI.get('additionalProductOptions') as AdditionalProductOptionType[];

  res.status(200).json({
    products, stock, reviews, additionalProductOptions
  });
}

export default handler;
