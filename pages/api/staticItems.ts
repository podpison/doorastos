import { ProductType, StaticStateType, StockItemType } from '@/redux/reducers/static';
import type { NextApiRequest, NextApiResponse } from 'next';

const products: ProductType[] = [
  {
    name: 'Expert pro tb1',
    img: 'https://i.postimg.cc/wTc75YgT/img.png',
    price: 46000,
    material: 'Scandinavian oak',
    id: 0,
    security: 'With thermal break',
    where: 'house',
    finishing: 'Solid',
    color: 'Wenge',
    discount: {
      value: 10,
      expiryDate: "2030-02-15T19:00:00.000Z"
    },
  },
  // {
  //   name: 'Expert pro arm1',
  //   img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
  //   price: 55000,
  //   material: 'Scandinavian oak',
  //   security: 'Armored',
  //   where: 'apartment',
  //   finishing: 'Forged',
  //   color: 'Wenge',
  //   id: 1,
  // },
  // {
  //   name: 'Expert pro tarm1',
  //   img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
  //   price: 32999,
  //   material: 'Scandinavian oak',
  //   security: 'Tamperproof',
  //   where: 'apartment',
  //   finishing: 'MDF overlays',
  //   color: 'Wenge',
  //   id: 2,
  // },
  // {
  //   name: 'Expert pro tb2',
  //   img: 'https://i.postimg.cc/wTc75YgT/img.png',
  //   price: 24000,
  //   material: 'Scandinavian oak',
  //   id: 3,
  //   security: 'With thermal break',
  //   where: 'house',
  //   finishing: 'With glass and mirror',
  //   color: 'White',
  //   discount: 20,
  // },
  // {
  //   name: 'Expert pro arm2',
  //   img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
  //   price: 68999,
  //   material: 'Scandinavian oak',
  //   security: 'Armored',
  //   where: 'apartment',
  //   finishing: 'With glass and mirror',
  //   color: 'Wenge',
  //   id: 4,
  // },
  // {
  //   name: 'Expert pro arm3',
  //   img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
  //   price: 68250,
  //   material: 'Scandinavian oak',
  //   security: 'Armored',
  //   where: 'house',
  //   finishing: 'Laminated chipboard',
  //   color: 'White',
  //   id: 5,
  // },
  // {
  //   name: 'Expert pro tb3',
  //   img: 'https://i.postimg.cc/wTc75YgT/img.png',
  //   price: 50000,
  //   material: 'Scandinavian oak',
  //   id: 6,
  //   security: 'With thermal break',
  //   where: 'apartment',
  //   finishing: 'Laminated chipboard',
  //   color: 'Black',
  //   discount: 90,
  // },
  // {
  //   name: 'Expert pro arm4',
  //   img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
  //   price: 57000,
  //   material: 'Scandinavian oak',
  //   security: 'Armored',
  //   where: 'apartment',
  //   finishing: 'Solid',
  //   color: 'Dark',
  //   id: 7,
  // },
  // {
  //   name: 'Expert pro tarm2',
  //   img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
  //   price: 25500,
  //   material: 'Scandinavian oak',
  //   security: 'Tamperproof',
  //   where: 'house',
  //   finishing: 'MDF overlays',
  //   color: 'Light',
  //   id: 8,
  // },
  // {
  //   name: 'Expert pro arm5',
  //   img: 'https://i.postimg.cc/wTc75YgT/img.png',
  //   price: 140000,
  //   material: 'Scandinavian oak',
  //   id: 9,
  //   security: 'Armored',
  //   where: 'house',
  //   finishing: 'Forged',
  //   color: 'Light',
  //   discount: 10,
  // },
  // {
  //   name: 'Expert pro tamp3',
  //   img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
  //   price: 75560,
  //   material: 'Scandinavian oak',
  //   security: 'Tamperproof',
  //   where: 'house',
  //   finishing: 'Laminated chipboard',
  //   color: 'Reds',
  //   id: 10,
  // },
  // {
  //   name: 'Expert pro arm5',
  //   img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
  //   price: 36540,
  //   material: 'Scandinavian oak',
  //   security: 'Armored',
  //   where: 'house',
  //   id: 11,
  //   finishing: 'Solid',
  //   color: 'Greens',
  // },
  // {
  //   name: 'Expert pro tb4',
  //   img: 'https://i.postimg.cc/wTc75YgT/img.png',
  //   price: 80700,
  //   material: 'Scandinavian oak',
  //   id: 12,
  //   security: 'With thermal break',
  //   where: 'apartment',
  //   discount: 20,
  //   finishing: 'Forged',
  //   color: 'Reds',
  // },
  // {
  //   name: 'Expert pro tamp4',
  //   img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
  //   price: 63999,
  //   material: 'Scandinavian oak',
  //   security: 'Tamperproof',
  //   where: 'house',
  //   id: 13,
  //   finishing: 'Solid',
  //   color: 'Greens',
  // },
  // {
  //   name: 'Expert pro tamp4',
  //   img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
  //   price: 68250,
  //   material: 'Scandinavian oak',
  //   security: 'Tamperproof',
  //   where: 'house',
  //   id: 14,
  //   finishing: 'MDF overlays',
  //   color: 'Greens',
  // },
];

const stock: StockItemType[] = [
  {
    heading: 'Retirement discount',
    description: 'We have translated our respect for the elderly into the opportunity for them to receive a special 10% discount on all models',
    img: {
      src: 'https://i.postimg.cc/xCJZ1g6V/pensioners.webp',
      alt: 'Happy pensioners'
    },
    id: 0,
  },
  {
    heading: 'Together is cheaper',
    description: 'Join with your neighbors and get a 10% discount',
    img: {
      src: 'https://i.postimg.cc/1tkjn6dn/together-Cheaper.webp',
      alt: 'Communication about joint payment between people'
    },
    id: 1,
  },
  {
    heading: 'Discount for new residents',
    description: 'We give all newcomers especially favorable conditions — doors with a 7% discount',
    img: {
      src: 'https://i.postimg.cc/cJ5jWPMc/new-Settlers.webp',
      alt: 'Happy new residents'
    },
    id: 2,
  },
];

const handler = async (req: NextApiRequest, res: NextApiResponse<StaticStateType>) => {
  let response: StaticStateType = await new Promise((res, rej) => {
    setTimeout(() => {

      return res({
        products,
        stock,
      });
    }, 2000);
  });

  res.status(200).json(response);
}

export default handler;
