import { Dispatch, FC, SetStateAction } from 'react';
import withThermalBreakImg from '../../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/with-thermal-break.webp';
import tamperproofImg from '../../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/tamperproof.webp';
import armoredImg from '../../../../../public/imgs/pages/catalog/settings/filter/additionalSecurity/armored.webp';
import Item from './item';
import { SecurityItemType } from '@/pages/catalog';
import { ProductType } from '@/redux/reducers/static';

const securityProperties = [
  {
    text: 'With thermal break' as ProductType['security'],
    info: {
      img: withThermalBreakImg,
      texts: [
        {
          heading: 'What is a thermal break?',
          description: 'This is a layer of material with low thermal conductivity, separating the outer and inner sides of the structure so that one does not transfer its temperature to the other.'
        },
        {
          heading: 'How does a thermal break work?',
          description: [
            'The principle of operation can be explained as "two doors in one", as the parts of the door are connected to each other through a heat-insulating material.',
            ' As a material with low thermal conductivity, for example, cork or MDF board is installed in the door.',
          ],
        },
      ]
    }
  },
  {
    text: 'Tamperproof' as ProductType['security'],
    info: {
      img: tamperproofImg,
      texts: [
        {
          heading: 'Burglary-resistant entrance doors are steel doors endowed with strength characteristics and special technological solutions to protect against forced and intelligent burglary and opening.',
          description: 'These doors are "Burglary Resistant" only after passing the proper tests in a special laboratory, which determines how the front door is able to resist burglary by special metal-cutting and destructive tools, as well as pyrotechnics for a certain time.'
        }
      ]
    }
  },
  {
    text: 'Armored' as ProductType['security'],
    info: {
      img: armoredImg,
      texts: [
        {
          heading: 'Armored doors are single or double doors with a metal frame covered with MDF. They vary in complexity of design and price.',
          description: [
            'The main component is a frame made of a bent profile, angle, channel. The second is the door leaf itself, which consists of two steel plates firmly fixed with hardness ribs. The thickness of the plates determines the weight of the door, they ensure its reliability.',
            'The third most important are locks, as a rule there are two or more of them at the buyer\'s choice.They must be secure and as burglar - resistant as possible.Correctly installed high - quality crossbars or pins provide a big role.',
          ]
        }
      ]
    }
  },
]

type Props = {
  activeItem: SecurityItemType
  setActiveItem: Dispatch<SetStateAction<SecurityItemType>>
}

const SecurityProperties: FC<Props> = ({ activeItem, setActiveItem }) => {

  let Items = securityProperties.map((i, index) => <Item activeItem={activeItem} setActive={setActiveItem} {...i} key={index} />);

  return <div className='grid gap-y-5 smlg:grid-cols-[max-content_1fr_1fr] smlg:gap-x-2.5 lg:grid-cols-[40%_1fr_1fr] lg:gap-x-4 xl:grid-cols-3'>
    {Items}
  </div>
};

export default SecurityProperties;