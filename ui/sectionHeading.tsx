import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode
}

const SectionHeading: FC<Props> = ({ children }) => {
  return <p className='text-[14px] text-grey2 mb-10 md:mb-12'>{children}</p>
};

export default SectionHeading;