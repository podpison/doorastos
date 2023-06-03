import { itemsAPI } from '@/firebase';
import { ProductType, StaticStateType, StockItemType } from '@/redux/reducers/static';
import type { NextApiRequest, NextApiResponse } from 'next';


const handler = async (req: NextApiRequest, res: NextApiResponse<StaticStateType>) => {
  let products = await itemsAPI.get('products') as ProductType[];
  let stock = await itemsAPI.get('stock') as StockItemType[];

  res.status(200).json({
    products, stock
  });
}

export default handler;
