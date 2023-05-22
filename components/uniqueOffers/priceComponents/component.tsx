import { FC } from 'react';
import cn from 'classnames';

type Props = {
  text: string
}

const Component: FC<Props> = ({ text }) => {
  return <p className={cn(
    'relative text-grey1 text-esm pb-2.5 max-esm:max-w-[250px]',
    'esm:[&:nth-of-type(1)>span]:w-[200vw] esm:[&:nth-of-type(1)>span]:-left-[90vw]',
  )}
  >
    {text}
    <span className='absolute bottom-0 left-0 w-full h-px bg-line' />
  </p>
};

export default Component;