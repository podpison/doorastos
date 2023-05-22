import SectionHeading from '@/components/sectionHeading';
import { FC } from 'react';
import img1 from '../../../public/imgs/pages/main/additionalSecurity/1.png';
import img2 from '../../../public/imgs/pages/main/additionalSecurity/2.png';
import img3 from '../../../public/imgs/pages/main/additionalSecurity/3.png';
import Item, { AdditionalSecurityItemType } from './item';
import useResize from '@/hooks/useResize';

const items: AdditionalSecurityItemType[] = [
  {
    img: img1,
    heading: 'Pin anti-cut',
    subheading: 'An anti-shear pin is an additional door protection system that prevents the door from being opened from the hinge side if an intruder cuts it off.',
    description: [
      {
        description: 'When the door is closed - the pin enters the hole in the loot and, if the hinges are cut off, it will not allow the attacker to gain access to the apartment (house), since he will not be able to bend the door.',
      },
      {
        description: 'As a standard, such anti-cuts are installed in the region of each hinge, in an amount corresponding to the number of hinges, but when ordering a door, you can discuss the installation of additional anti-cuts - not necessarily only in the hinge area. After all, the door is made to order and it all depends on the wishes of the customer.',
      },
      {
        description: 'Installation of pin anti-cuts in the area of each hinge is included in all entrance doors and is not paid extra.',
      },
    ],
    isExpandable: true,
    className: '[&>div:nth-child(2)]:py-0 [&>div:nth-child(2)>img]:max-h-[250px] [&>div:nth-child( 2)>img]:object-top [&>div:nth-child(2)>img]:object-cover max-md:[&>div:nth-child(2)>img]:w-full md :[&>div:nth-child(2)]:max-h-none md:[&>div:nth-child(2)>img]:max-h-none',
  },
  {
    img:img2,
    heading: 'Anti-Theft System',
    subheading: 'Anti-theft system is an additional security option for the front door. An intruder will not be able to quietly do something with such a door.',
    description: [
      {
        description: 'Additional stiffeners. Additional protection of locks on both sides with metal sheets 3 mm thick.',
      },
      {
        description: 'Bend, bend, quietly "tuck", etc. - no way.',
      },
      {
        description: 'This design is an additional security system that we can implement on any front door ordered from us - at your request.',
      }
    ],
    className: 'md:[&>div:nth-child(2)]:min-h-[480px] md:[&>div:nth-child(2)]:min-h-[600px]'
  },
  {
    img:img3,
    heading: 'Additional abutment protection',
    subheading: 'Supplementary heading protection - an additional security option for the front door.',
    description: [
      {
        description: 'A "square" is welded from the side of the door porch, which will not allow an attacker to lay a crowbar or crowbar between the slat and the door in order to bend it. In the photo, this "square" is marked in red. There are also variations with protection around the entire perimeter of the door using a strip.',
      },
      {
        description: 'When installing the door, the strip is hidden under the casing, is not visually detected and does not spoil the appearance of the door. It\'s impossible to get close to the castle quietly with this extra protection.',
      },
      {
        description: 'This design is an additional security system that we can implement on any front door ordered from us - at your request.',
      },
    ],
    className: 'md:[&>div:nth-child(2)]:min-h-[300px] md:[&>div:nth-child(2)]:min-h-[400px]'
  },
];

const AdditionalSecurity: FC = () => {
  let windowWidth = useResize();
  let Items = items.map((i, index) => <Item windowWidth={windowWidth} {...i} key={index} />);

  return <section className='mt130-300'>
    <SectionHeading>Additional security</SectionHeading>
    <div className='grid md:grid-cols-2 md:gap-x-7 smlg:gap-x-12'>
      <h5 className='text16-24 max-w-[20em]'>Thefts of apartments today occupy a leading position among crime in many cities of the country.</h5>
      <div className='text-esm flex flex-col gap-y-2.5 max-md:mt-5'>
        <p className='max-w-[23em]'>In order to protect you as much as possible, we offer reliable designs with additional functionality.</p>
        <p className='max-w-[27em]'>The strength of the structure acts as a guarantee of security against burglary. Even the most budgetary variants of models in our company have a high class of burglary resistance.</p>
      </div>
    </div>
    <div className='mt50-150 flex flex-col gap-y-12 md:gap-y-[150px]'>
      {Items}
    </div>
  </section>
};

export default AdditionalSecurity;