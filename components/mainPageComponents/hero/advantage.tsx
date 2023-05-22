import { FC } from 'react';

type Props = {
  text: string
}

const Advantage: FC<Props> = ({ text }) => {
  return <div
    className={`relative max-esm:mt-7
    md:[&:nth-of-type(1)]:mt-4 md:[&:nth-of-type(1)>span]:-top-5\
    md:[&:nth-of-type(2)]:mt-16 md:[&:nth-of-type(2)>span]:-top-[68px]\
    md:[&:nth-of-type(3)]:mt-7 md:[&:nth-of-type(3)>span]:-top-8\
    md:[&:nth-of-type(4)]:mt-12 md:[&:nth-of-type(4)>span]:-top-[52px]\
    `}
  >
    <span
      className='block w-12 h-px bg-line md:w-2.5 md:h-2.5 md:rounded-full md:bg-grey2 md:absolute md:left-1/2 md:-translate-x-1/2'
    />
    <p className='text-black text-[12px] esm:text-grey4 max-md:mt-1 smlg:text-[14px]'>{text}</p>
  </div>
};

export default Advantage;