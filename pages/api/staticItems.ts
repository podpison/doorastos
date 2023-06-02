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
    characteristics: {
      general: {
        manufacturer: 'ninagoe',
        productName: 'surona 4',
        openingDirection: 'right',
        openingSide: 'left',
        leafThickness: '54 mm',
        frameType: 'type 5',
        soundInsulationIndex: '1',
        height: '2 m',
        width: '0.9 m',
        weight: '150 kg',
      },
      protectionAgainstBreaking: {
        numberOfMetalSheets: '5',
        metalThickness: '6',
        numberOfStiffeners: '8',
        numberOfAntiRemovableClips: '4',
        numberOfLocks: '2',
        lockBrand: 'locka',
        lockClass: '2',
        armorPlate: false,
        armorPackage: false,
        nightValve: true,
      },
      decorativeTrim: {
        coatingOfCanvasAndBox: 'grey',
        coatingColor: 'white',
        finishingOutside: true,
        finishingFromTheInside: false,
        decorativeThreshold: true,
      },
      accessories: {
        hardwareColor: 'grey',
        pen: 'black',
        closer: true,
        threshold: true,
        hingeDecor: false,
      },
      heatAndSoundInsulation: {
        doorLeafFiller: 'Plywood',
        fillerLayerThickness: '25 mm',
        flammabilityClassOfTheFiller: '6',
        applicationTemperatureOfTheFiller: '90',
        doorFrameInsulation: false,
      },
      tightness: {
        numberOfSealCircuits: '3',
        sealMaterial: 'Plywood',
      },
      easeOfUse: {
        doorHingeType: 'Comfort +',
        numberOfDoorHinges: '5',
        openingAngle: '90',
        removableCornersToReplaceTheInnerPanel: '2',
        functionalValve: false,
        castleOfInvisibility: false,
        electronicLockWithFingerprintScanner: true,
        latchAdjuster: 'Metal',
        closer: true,
        peepholeHeight: '50 mm',
        viewingAngleOfThePeephole: '180',
      },
    },
    reviews: [
      {
        grade: 5,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 3,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 1,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 3,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 2,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 3,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 5,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 5,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 5,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
      {
        grade: 1,
        userName: 'Petrov Mikhail Vladimirovich',
        date: 'April 17, 2021',
        city: 'Moscow',
        advantages: 'Lorem ipsum dolor sit amet.',
        disadvantages: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quidem?',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quis inventore qui maxime atque hic cum quasi nam distinctio iste?'
      },
    ],
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
    heading: 'Retirement discount1',
    description: 'We have translated our respect for the elderly into the opportunity for them to receive a special 10% discount on all models',
    img: {
      src: 'https://i.postimg.cc/xCJZ1g6V/pensioners.webp',
      alt: 'Happy pensioners'
    },
    id: 0,
  },
  {
    heading: 'Together is cheaper1',
    description: 'Join with your neighbors and get a 10% discount',
    img: {
      src: 'https://i.postimg.cc/1tkjn6dn/together-Cheaper.webp',
      alt: 'Communication about joint payment between people'
    },
    id: 1,
  },
  {
    heading: 'Discount for new residents1',
    description: 'We give all newcomers especially favorable conditions — doors with a 7% discount',
    img: {
      src: 'https://i.postimg.cc/cJ5jWPMc/new-Settlers.webp',
      alt: 'Happy new residents'
    },
    id: 2,
  },
  {
    heading: 'Retirement discount2',
    description: 'We have translated our respect for the elderly into the opportunity for them to receive a special 10% discount on all models',
    img: {
      src: 'https://i.postimg.cc/xCJZ1g6V/pensioners.webp',
      alt: 'Happy pensioners'
    },
    id: 3,
  },
  {
    heading: 'Together is cheaper2',
    description: 'Join with your neighbors and get a 10% discount',
    img: {
      src: 'https://i.postimg.cc/1tkjn6dn/together-Cheaper.webp',
      alt: 'Communication about joint payment between people'
    },
    id: 4,
  },
  {
    heading: 'Discount for new residents2',
    description: 'We give all newcomers especially favorable conditions — doors with a 7% discount',
    img: {
      src: 'https://i.postimg.cc/cJ5jWPMc/new-Settlers.webp',
      alt: 'Happy new residents'
    },
    id: 5,
  },
  {
    heading: 'Retirement discount3',
    description: 'We have translated our respect for the elderly into the opportunity for them to receive a special 10% discount on all models',
    img: {
      src: 'https://i.postimg.cc/xCJZ1g6V/pensioners.webp',
      alt: 'Happy pensioners'
    },
    id: 6,
  },
  {
    heading: 'Together is cheaper3',
    description: 'Join with your neighbors and get a 10% discount',
    img: {
      src: 'https://i.postimg.cc/1tkjn6dn/together-Cheaper.webp',
      alt: 'Communication about joint payment between people'
    },
    id: 7,
  },
  {
    heading: 'Discount for new residents3',
    description: 'We give all newcomers especially favorable conditions — doors with a 7% discount',
    img: {
      src: 'https://i.postimg.cc/cJ5jWPMc/new-Settlers.webp',
      alt: 'Happy new residents'
    },
    id: 8,
  },
  {
    heading: 'Retirement discount4',
    description: 'We have translated our respect for the elderly into the opportunity for them to receive a special 10% discount on all models',
    img: {
      src: 'https://i.postimg.cc/xCJZ1g6V/pensioners.webp',
      alt: 'Happy pensioners'
    },
    id: 9,
  },
  {
    heading: 'Together is cheaper4',
    description: 'Join with your neighbors and get a 10% discount',
    img: {
      src: 'https://i.postimg.cc/1tkjn6dn/together-Cheaper.webp',
      alt: 'Communication about joint payment between people'
    },
    id: 10,
  },
  {
    heading: 'Discount for new residents4',
    description: 'We give all newcomers especially favorable conditions — doors with a 7% discount',
    img: {
      src: 'https://i.postimg.cc/cJ5jWPMc/new-Settlers.webp',
      alt: 'Happy new residents'
    },
    id: 11,
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
