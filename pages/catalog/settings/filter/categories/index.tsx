import { FC, useState } from 'react';
import solidImg from '../../../../../public/imgs/pages/catalog/settings/filter/solid.webp';
import MDFOverlaysImg from '../../../../../public/imgs/pages/catalog/settings/filter/MDF-overlays.webp';
import laminatedChipboardImg from '../../../../../public/imgs/pages/catalog/settings/filter/laminated-chipboard.webp';
import withGlassAndMirrorImg from '../../../../../public/imgs/pages/catalog/settings/filter/with-glass-and-mirror.webp';
import forgedImg from '../../../../../public/imgs/pages/catalog/settings/filter/forged.webp';
import Item, { ActiveCategoryItemType } from './item';

type Props = {
  activeItems: ActiveCategoryItemType[]
  setActiveItem: (category: ActiveCategoryItemType['category'], newItems: string[]) => void
}

const items = [
  {
    defaultItem: 'Price',
    items: [
      {
        text: '30 000 ₽ — 50 000 ₽',
      },
      {
        text: '50 000 ₽ — 70 000 ₽',
      },
      {
        text: '70 000 ₽ — 90 000 ₽',
      },
      {
        text: '90 000 ₽ and more',
      },
    ]
  },
  {
    defaultItem: 'Finishing',
    items: [
      {
        text: 'Solid',
        info: {
          img: solidImg,
          texts: [
            {
              heading: 'This option is considered the most expensive of all.',
              description: 'For objective reasons, it can be called the most spectacular: our production offers many solutions that differ in different design solutions. There are many textures depending on the type of wood, toning with different shades is used, patterns are burned out, milling finishing technology is used.'
            }
          ]
        }
      },
      {
        text: 'MDF overlays',
        info: {
          img: MDFOverlaysImg,
          texts: [
            {
              heading: 'If you want to choose modern front door finishing materials that are affordable, practical, strong and durable, MDF boards are the perfect solution.',
              description: 'Today we offer a huge choice of designs. The decorative layer is a PVC film with various patterns in a wide range of colors (most often it imitates natural wood of valuable species). The thickness of the material can be from 6 to 16 mm, with the use of thick overlays, it becomes possible to mill with complex deep patterns.'
            }
          ]
        }
      },
      {
        text: 'Laminated chipboard',
        info: {
          img: laminatedChipboardImg,
          texts: [
            {
              heading: 'This option is most often used in apartment buildings where normal indoor humidity can be ensured.',
              description: 'Particleboard is cheaper than MDF, but this option requires protection from condensation on the surface. At the same time, performance characteristics such as sound insulation and protection against heat loss are at a fairly high level.'
            }
          ]
        }
      },
      {
        text: 'With glass and mirror',
        info: {
          img: withGlassAndMirrorImg,
          texts: [
            {
              heading: 'One of the most effective solutions in the design of metal doors was the use of glass and mirror inserts.',
              description: ' They allow you to make the canvas not only exclusive in its design, but also a much lighter element of the interior. In addition, it is worth noting the practical side of the issue: the mirror on the inside can also be used for its intended purpose. In addition, it visually enlarges the space, which is important for such compact spaces as a corridor.'
            }
          ]
        }
      },
      {
        text: 'Forged',
        info: {
          img: forgedImg,
          texts: [
            {
              heading: 'Metal doors with wrought iron elements are exclusive solutions that have become very popular lately. ',
              description: 'The most interesting stylistic ideas can be realized using this design technique. In addition, one cannot fail to note the practicality of such structures: this is an effective way to strengthen the canvas, make it more resistant to hacking. They are especially relevant if double-glazed windows are used in the design.'
            }
          ]
        }
      }
    ]
  },
  {
    defaultItem: 'Color',
    items: [
      {
        text: 'Wenge',
      },
      {
        text: 'White',
      },
      {
        text: 'Black',
      },
      {
        text: 'Dark',
      },
      {
        text: 'Light',
      },
      {
        text: 'Reds',
      },
      {
        text: 'Greens',
      }
    ]
  },
]

const Categories: FC<Props> = ({ activeItems, setActiveItem }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  let Items = items.map((i, index) => <Item
    expandedItem={expandedItem}
    setExpandedItem={setExpandedItem}
    activeItems={activeItems}
    setActiveItem={setActiveItem}
    key={index}
    {...i}
  />);

  return <div className='flex gap-y-5 max-smlg:flex-col smlg:gap-x-2.5 lg:gap-x-4'>
    {Items}
  </div>
};

export default Categories;