import Accordion from '@/components/accordion';
import SectionHeading from '@/components/sectionHeading';
import { FC } from 'react';
import { TextsItemType } from '../texts/item';

const accordionItems: TextsItemType[] = [
  {
    heading: 'Price',
    description: 'Chinese-made doors are much cheaper than Russian-made doors. But just like the price, the quality of Chinese doors is much lower.',
  },
  {
    heading: 'Metal thickness and door weight',
    description: [
      'A quality metal door cannot be light weight. Russian-made structures are very heavy, their weight always exceeds 50 kg. Metal thickness – not less than 1.5 mm.',
      'Doors from China are quite light and thin. Their weight often does not exceed 20-30 kg, and the thickness of the metal sheet barely reaches 0.5 mm. When pressed, the canvas flexes and springs.',
    ],
  },
  {
    heading: 'Dimensions',
    description: 'Chinese manufacturers produce doors in standard sizes. From a domestic manufacturer, you can purchase a structure of any size for installation in houses and apartments with different doorway parameters.',
  },
  {
    heading: 'Reliability of locking devices',
    description: 'Cheap locks made of silumin and other unreliable materials are installed in Chinese constructions. Manufacturers of the Russian Federation choose high-quality locking mechanisms made of high-strength brass or steel to equip the front door.',
  },
  {
    heading: 'Fittings',
    description: [
      'Chinese door fittings quickly become unusable and lose their attractive appearance.',
      'Russian manufacturers do not save on such important elements of equipment and complete metal doors with high-quality fittings with long-term and functional performance.',
    ],
  },
  {
    heading: 'Filling doors',
    description: [
      'The doors of domestic production are filled with certified materials that have passed all the necessary test tests. The most commonly used foamed polyurethane, basalt or mineral plate. These materials do not allow cold wind, moisture and noise to enter the house, providing reliable protection.',
      'Chinese counterparts often turn out to be "hollow" and as a filler, you can only count on corrugated cardboard, which is not packed tightly enough. All the shortcomings of this material can be noticeably felt in the cold season of the year. The door does not protect against drafts and frost, it lets cold air into the house and extraneous noise from the street.',
    ],
  },
  {
    heading: 'Design & Finish',
    description: [
      'Chinese-made doors have a quite attractive design, but if you look closely at the door leaf, you can see a poor-quality superimposed pattern created by a thin polymer film. During operation, such a door quickly loses attractive data. In addition, the design of all doors is typical and not unique.',
      'Manufacturers from Russia choose materials of decent quality as finishes, which are resistant to various influences. They create a presentable appearance for the finished product. The buyer can choose a beautiful canvas with decorative elements made of chromed metal, glass, a mirror surface or carvings on a wooden base. The choice of design solutions is very large!',
    ],
  },
  {
    heading: 'Lifetime',
    description: [
      'Chinese doors are of poor quality. Accordingly, the service life of such structures is short. Many people call metal doors from China disposable, which is quite true.',
      'Sturdy metal doors from the Russian Federation will last for several decades, and even years later they will not lose their performance. Many citizens change such doors to new designs, only to change the already bored design, and the old doors, which have not lost their appearance and their protective qualities, are reinstalled in other rooms.',
    ],
  },
  {
    heading: 'How to Quickly Recognize a Chinese Door',
    description: 'Doors made in China are much cheaper than structures made in Russia. But just like the price, the quality of Chinese doors is much lower.',
  },
  {
    heading: 'Conclusion',
    description: [
      'Chinese doors are not a way to protect the house even from drafts, so you should not even count on protecting the house from breaking and entering thieves. Such doors can be installed in an office located on the heated floor of a high-rise building where a security service operates. Installing low-quality doors in residential buildings is a very unwise decision.',
      'It is not worth saving money on the purchase of such an important structure, the main function of which is to protect the house. It is better to spend money once, but to purchase a high-quality metal entrance door that will perfectly cope with the tasks set and will last for a dozen years. You can choose a reliable steel door of a domestic manufacturer on our website.'
    ],
  },
];

const QualityDifferences: FC = () => {
  return <section className='mt130-300 overflow-x-hidden'>
    <SectionHeading>The difference between Expert and Chinese doors</SectionHeading>
    <div className='grid md:grid-cols-2 md:gap-x-7 smlg:gap-x-12'>
      <h5 className='text16-24 max-w-[20em] md:max-w-[23em]'>Save money and buy a cheap Chinese-made door or purchase a solid design from a Russian manufacturer.</h5>
      <div className='text-esm flex flex-col gap-y-2.5 max-md:mt-5'>
        <p className='max-w-[23em]'>To make the right choice, you need to study the features of doors from China and the Russian Federation.</p>
        <p className='max-w-[28.3em]'>We will consider what is the difference between doors made in China and in Russia, what is important to pay attention to when choosing a door, what problems can arise with a Chinese front door</p>
      </div>
    </div>
    <Accordion className='mt-10 md:max-w-[calc(50%_-_14px)] md:ml-auto md:mt-5 smlg:max-w-[calc(50%_-_24px)]' items={accordionItems} />
  </section>
};

export default QualityDifferences;