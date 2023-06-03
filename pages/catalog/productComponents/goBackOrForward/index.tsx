import { FC } from 'react';
import Item from './item';

type Props = {
  currentItemId: number | undefined
  canGoForward: boolean
}

const GoBackOrForward: FC<Props> = ({ currentItemId, canGoForward }) => {
  return <section className='flex items-center justify-between mt-12'>
    <Item href='/catalog' isReverse>Back to catalog</Item>
    {canGoForward && <Item href={`/catalog/${(currentItemId || 0) + 1}`}>Next door</Item>}
  </section>
};

export default GoBackOrForward;