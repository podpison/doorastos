import { FC } from 'react';
import cn from 'classnames';

export type PrivacyPolicyItemType = {
  heading: string
  items?: (string | {
    heading: string
    items?: string[]
    list?: string[]
  })[]
}

type Props = {
  id: number | string
  isSubitem?: boolean
} & PrivacyPolicyItemType

const Item: FC<Props> = ({ heading, items, id, isSubitem }) => {
  let Subitems = items?.map((i, index) => {
    if (typeof i === 'string') {
      return <p className='text-esm' key={index}>{`${id}.${index + 1}`}. {i}</p>
    }

    return <Item {...i} id={`${id}.${index + 1}`} isSubitem={true} key={index} />;
  });

  return <div className={cn('flex flex-col', !isSubitem && 'gap-y-2.5')}>
    <h6 className={cn('', isSubitem ? 'text-esm' : 'text-light text-grey1 font-semibold')}>{id}. {heading}</h6>
    <div className='flex flex-col gap-y-1'>{Subitems}</div>
  </div>
};

export default Item;