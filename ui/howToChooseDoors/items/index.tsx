import { FC } from 'react';
import TextItem, { HowToChooseDoorsTextItemProps } from './textItem';
import ImgItem, { HowToChooseDoorsImgItemProps } from './imgItem';
import ButtonsGroup, { ButtonsGroupItemType } from '@/components/buttonsGroup/buttonsGroup';
import doorWithKeyImg from './../../../public/imgs/pages/howToChooseDoors/apartment/doorWithKeys.webp';
import doorNearTVImg from './../../../public/imgs/pages/howToChooseDoors/apartment/doorNearTV.webp';
import doorNearPlantsImg from './../../../public/imgs/pages/howToChooseDoors/house/doorNearPlants.webp';
import useWhereQuery, { WhereType } from '@/hooks/useWhereQuery';

export type ItemsType = (HowToChooseDoorsTextItemProps | HowToChooseDoorsImgItemProps)[];

const isTextItemType = (item: HowToChooseDoorsTextItemProps | HowToChooseDoorsImgItemProps): item is HowToChooseDoorsTextItemProps => {
  return (item as HowToChooseDoorsTextItemProps).heading !== undefined;
};

const buttonsGroupItems: ButtonsGroupItemType[] = [
  {
    text: 'Doors to an apartment',
    where: 'apartment'
  },
  {
    text: 'Doors to a house',
    where: 'house'
  },
];

const apartmentItems: ItemsType = [
  {
    heading: 'Select entrance doors to the apartment',
    texts: [
      {
        description: 'Choosing the entrance doors to an apartment is a rather difficult task. Entrance doors to the apartment provide protection against the penetration of thieves, and also perform a decorative function and are an interior decoration. Given the specifics of the use of this element, certain requirements are imposed on it. So, they must meet a high level of security and provide protection against hacking. Also, the door to the apartment retains heat inside the room and prevents the penetration of extraneous noise.'
      },
    ]
  },
  {
    heading: 'Which is better to choose the door to the apartment',
    texts: [
      {
        description: 'The choice of entrance doors to an apartment should be approached with knowledge of the specific conditions of its use. If in your house, the entrance is unheated, or it is heated, but not enough, then you need to buy an insulated door. It will keep the heat inside the room, because the main sources of cooling of the apartment are the windows and the front door. If your entrance is not equipped with a combination lock and is accessible to anyone, then you should take care of the security of your apartment.'
      },
      {
        description: 'Given that a large number of break-ins are carried out through the front door, it should be as strong and secure as possible. Armored doors are best suited for this purpose - it is almost impossible to crack such a door, this will require professional equipment, the use of which will certainly attract the attention of neighbors. Therefore, thieves who encounter an obstacle in the form of an armored door on their way, in most cases, do not even attempt to penetrate.'
      },
      {
        description: 'The outer door must be vandal resistant, ie. unaffected by mechanical and thermal influences. The metal door meets these requirements, retaining its original appearance for many years. With increased humidity in the entrance, it is necessary that the door is moisture resistant, the metal version again meets this criterion. As for appearance, steel entrance doors can be made in a huge variety of colors and shapes. Therefore, each owner will be able to choose the option that best suits his requirements.'
      },
    ]
  },
  {
    img: doorWithKeyImg,
    alt: 'Door with keys'
  },
  {
    heading: 'The Main Qualities of a Good Apartment Entrance Door',
    texts: [
      {
        description: 'When choosing a front door, for example, metal front doors, there are a few things you need to pay attention to, this will help you not to make a mistake and choose a really good one.'
      },
      {
        description: 'The design of the entrance iron door must be strong. It is better that the frame is made of a single-curved profile, the number of stiffening ribs is 5-6, this will create a strong reliable protection.'
      },
      {
        description: 'Doors must be well insulated against heat and sound to keep outside noise and odors out of the apartment.'
      },
      {
        description: 'The weight of the door must be at least 80 kg and the thickness of the steel sheet must be at least 1.5 mm.'
      },
      {
        description: 'For the core of the castle, the armor plate is important, which protects the castle from breaking. '
      },
      {
        description: 'Having a good castle. Experts advise installing several locks, with different locking mechanisms, such as lever and cylinder.'
      },
    ]
  },
  {
    heading: 'What determines the price when choosing entrance doors?',
    texts: [
      {
        description: 'Now the market of door products offers various models of entrance doors. You can choose doors for every taste and budget. Of course, the higher the quality of the door, the higher the price.'
      },
      {
        description: {
          heading: 'The price of entrance doors depends on several factors:',
          items: [
            'Metal sheet thickness',
            'Fittings',
            'Decorative finishing',
            'High quality and reliability of manufactured products',
            'Lock',
          ]
        }
      },
      {
        description: 'There are a lot of inexpensive options that use 1mm thick metal, cheap materials and fittings. Value for money is good here.'
      },
      {
        description: 'In an apartment it is better to install an entrance door with a metal thickness of at least 1.5 mm to 2-2.5 mm. As for the fittings, these are: protective loops, anti-cuts, armor plates. These elements give the door product additional protection. With good accessories, the price of the door will be much higher.'
      },
      {
        description: {
          heading: 'Main front door finishes:',
          items: [
            'Painting a metal surface with paint. A fairly simple option, but its drawback is a completely unaesthetic look',
            'The wood trim has a great look and will last a very long time. This option is expensive',
            'Coating the MDF panel with a film. MDF panels are much cheaper than natural wood. If they are covered with a special film, then the door from it will last a long time and will have a stylish aesthetic appearance.',
          ]
        }
      },
      {
        description: 'Due importance must be given to the choice of lock, as the bulk of unauthorized intrusions into the house are due to poor quality products. Locks differ from each other by the locking mechanism. The more reliable and burglary-resistant it is, the more expensive it is.'
      },
      {
        description: 'The cost of a door depends on many factors. It is clear that a custom-made front door with good components, a lock and a unique design will cost you a lot of money. But, there are plenty of good standard options out there that will be up to par.'
      },
      {
        description: 'The cost of a door product is very individual and our specialists will be able to find a good option for you, taking into account all your preferences.'
      },
    ]
  },
  {
    heading: 'What you need to pay attention to when choosing the front door to the apartment',
    texts: [
      {
        description: 'If you want to choose the right doors for your apartment, first read the information from the manufacturer, evaluate all the pros and cons, study customer reviews.'
      },
      {
        description: 'When choosing an entrance door, you should pay attention to the following points: heat and sound insulation, protective mechanisms, high-quality upholstery. It is on these criteria that the service life of door products depends.',
      },
    ]
  },
  {
    img: doorNearTVImg,
    alt: 'Door near TV'
  },
  {
    heading: 'Advantages of ordering metal doors from "Expert" company',
    texts: [
      {
        description: {
          heading: 'When ordering a metal door from us, you can count on the following benefits:',
          items: [
            'Free departure of measurers',
            'Front door manufacturing and delivery',
            'Provision of services for the installation of doors',
            'High quality and reliability of manufactured products',
            '1 year warranty on all doors',
            'Possibility of post-warranty service',
          ]
        }
      },
      {
        description: 'Having our own production and large volumes of products allowed us to reduce the price of doors sold. You can buy from us both inexpensive models of iron doors to an apartment, which are distinguished by their affordability and simplicity of design, as well as premium class models, with a high degree of protection and exclusive design. Also, in stock and on order, you can purchase insulated metal, armored and doors with forged elements. A wide variety of shapes and colors will allow any client to choose a door. '
      },
      {
        description: 'The production facilities of the "Expert" company are equipped with modern high-tech equipment, which allows the production of high-quality and reliable doors. Thanks to the constant introduction of new technologies and the use of our own developments, we are expanding the range of products and increasing their level of quality. All employees of the company "Expert" are highly qualified specialists with extensive work experience in their positions. Therefore, at any stage of the provision of services, our customers can count on punctuality, accuracy and professionalism. With a variety of products and prices for it, you can find on the official website of the company "Expert".'
      },
    ]
  }
];

const houseItems: ItemsType = [
  {
    heading: 'Choose metal doors for your home',
    texts: [
      {
        description: 'The front door to a house is the first thing a person sees before entering a dwelling. Therefore, in its appearance, the first impression of the whole house and its owners is formed. From the point of view of functionality, the street door also bears a great burden - it must protect the home from the effects of natural phenomena, and also be a reliable protector of the house from thieves.'
      },
      {
        description: ' Today, the best solution for a private house is a door with a thermal break, because it is the most reliable and has high heat and sound insulation properties.'
      },
    ]
  },
  {
    heading: 'How to choose entrance doors to a private house',
    texts: [
      {
        description: 'There are many factors to consider when choosing a front door to a private house. Its reliability and durability are decisive. Reliability means the resistance of the door to the effects of natural phenomena, humidity and temperature changes, as well as protection against burglary. Metal doors correspond to these criteria to the maximum extent. Models made of steel are almost impossible to hack, and thieves, as a rule, faced with such an obstacle in their path, give up any attempts to enter the house. Also, metal entrance doors for the house are not exposed to moisture, they do not dry out and do not deform, unlike wooden models. Under the influence of low and high temperatures, the metal sheathing is not destroyed. Snow and rain will not affect the quality of steel doors or their appearance, nor will the sun\'s rays.'
      },
      {
        description: 'Before you buy a front door to a private house, you need to decide whether people will live in it in the winter season or not. If they are, then the door should be warm - metal models can also be insulated and have good thermal insulation. In cases where the house is not used in winter, you can buy an inexpensive metal door that is not insulated. Whichever option you choose, steel doors will provide a high level of burglary protection for your home.'
      },
      {
        description: 'Not the last role is given to the design of the doors. They are an integral part of the overall style in which the building is built. Therefore, the door to the street in a private house is selected in accordance with the design of this house. On the modern market there are models in a huge assortment - you can buy doors of any shape, color, texture, with various decorative elements and glass inserts.'
      },
    ]
  },
  {
    heading: 'Criteria for choosing the entrance door to the house',
    texts: [
      {
        description: 'There is a wide range of external doors for private houses, which differ from each other in several points: the manufacturer, the material from which the door is made, fittings, price.'
      },
      {
        description: 'In order to choose quality doors for your home, you need to take the choice of door product seriously.'
      },
      {
        description: {
          heading: 'Criteria for a quality entrance door to a private house:',
          items: [
            'High heat and sound insulation properties',
            'Kadezhny locks',
            'Quality fittings',
            'Additional protection system',
            'Attractive appearance',
          ]
        }
      },
      {
        description: 'If a door to a house has all of the above characteristics, it will serve its owners for a long time.'
      },
    ]
  },
  {
    img: doorNearPlantsImg,
    alt: 'Door near plants'
  },
  {
    heading: 'Door Frame Strength',
    texts: [
      {
        description: 'The strength of metal entrance doors is ensured not only by a 2 mm steel sheet, but also by stiffening ribs. Vertical and horizontal stiffeners are installed between steel sheets. The design protects the door leaf from mechanical influences.'
      },
    ]
  },
  {
    heading: 'Door leaf quality',
    texts: [
      {
        description: 'Increasingly, outdoor doors are being chosen for a country house as opposed to wooden ones. Steel doors are superior to wood products in many ways, such as resistance to adverse weather conditions.'
      },
      {
        description: 'Entrance metal doors for a private house perfectly withstand the sun, rain, snow, do not deform and retain their original appearance. High-quality doors are made with a steel sheet of at least 1.8 - 2 mm.'
      },
    ]
  },
  {
    heading: 'Thermal properties',
    texts: [
      {
        description: 'One of the important characteristics of the entrance door to the house is its ability to keep warm and protect the room from sudden temperature changes. To do this, the door leaf inside is insulated with special insulating materials. Polyurethane is the best for this.'
      },
    ]
  },
  {
    heading: 'Hackproof',
    texts: [
      {
        description: {
          heading: 'Burglary resistance of entrance doors to a private house is determined by several factors:',
          items: [
            'Steel sheets from 2 mm',
            'Presence of stiffening ribs',
            'Reinforced door frame',
            'Armored plate at the location of locks',
            'The presence of 2 types of locks',
            'Quality Door Hinges',
          ]
        }
      },
      {
        description: 'The presence of these elements on the door leaf significantly increases its resistance to illegal entry and breaking.'
      },
      {
        description: {
          heading: 'There are 3 types of burglary resistance of entrance doors:',
          items: [
            'First type - doors are easy to break',
            'Second type - doors can be broken into with special electrical equipment',
            'The third type is a door structure with additional reinforcing elements, which will take more than 30 minutes and special tools to crack',
          ]
        }
      },
    ]
  },
  {
    heading: 'Peephole and Burglar Alarm',
    texts: [
      {
        description: 'Additional protection is a burglar alarm and the presence of a peephole or video peephole, which are popular due to their manufacturability and ease of use. They allow you not to make holes and not spoil the door leaf. Some customers, when choosing an entrance door, completely refuse a peephole, and instead install only a burglar alarm.'
      },
    ]
  },
  {
    heading: 'Exterior',
    texts: [
      {
        description: {
          heading: 'Another important thing to take care of is the exterior trim for the front doors to the house. If the doors will face the street, they must withstand temperature changes, the effects of precipitation, as well as UV rays. For finishing the entrance doors use: ',
          items: [
            'PVC film',
            'MDF panels',
            'Viniliskin',
            'Finishing with special paints',
          ]
        }
      },
      {
        description: 'Glass inserts are an additional decor in the external finishing of the entrance doors. You can choose any size and shape. Entrance doors with glass will be an aesthetic addition to the interior of the whole house.'
      },
    ]
  },
  {
    heading: 'Fittings',
    texts: [
      {
        description: 'The front door to a private house without good fittings only half fulfills its protective functions. Locks are an important component of door fittings. There are many kinds and types of castles. For entrance doors to a private house, it is better to choose several types of locks.'
      },
    ]
  },
  {
    heading: 'Advantages of ordering metal doors from "Expert" company',
    texts: [
      {
        description: {
          heading: 'When ordering a metal door from us, you can count on the following benefits:',
          items: [
            'Free departure of measurers',
            'Front door manufacturing and delivery',
            'Provision of services for the installation of doors',
            'High quality and reliability of manufactured products',
            '1 year warranty on all doors',
            'Possibility of post-warranty service',
          ]
        }
      },
      {
        description: ' The presence of our own production and large volumes of products allowed us to reduce the price of doors sold. You can buy from us both inexpensive models of iron doors to an apartment, which are distinguished by their affordability and simplicity of design, as well as premium class models, with a high degree of protection and exclusive design. Also, in stock and on order, you can purchase insulated metal, armored and doors with forged elements. A wide variety of shapes and colors will allow any client to choose a door. '
      },
      {
        description: 'The production facilities of the "Expert" company are equipped with modern high-tech equipment, which allows the production of high-quality and reliable doors. Thanks to the constant introduction of new technologies and the use of our own developments, we are expanding the range of products and increasing their level of quality. All employees of the company "Expert" are highly qualified specialists with extensive work experience in their positions. Therefore, at any stage of the provision of services, our customers can count on punctuality, accuracy and professionalism. With a variety of products and prices for it, you can find on the official website of the company "Expert".'
      },
    ]
  },
]

type Props = {
  where: WhereType
}

const Items: FC<Props> = ({ where }) => {
  let items = where === 'house' ? houseItems : apartmentItems;
  let Items = items.map((d, index) => isTextItemType(d) ? <TextItem {...d} key={index} /> : <ImgItem {...d} key={index} />);

  return <div>
    <ButtonsGroup className='grid grid-cols-[max(160px,_50%)_1fr] esm:grid-cols-2 md:max-w-[400px]' items={buttonsGroupItems} activeLink={where} />
    <div className='mt30-50 relative flex flex-col gap-y-12 md:gap-y-[70px]'>
      {Items}
    </div>
  </div>
};

export default Items;