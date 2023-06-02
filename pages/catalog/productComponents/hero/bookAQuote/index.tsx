import { FC } from 'react';
import cls from './styles.module.scss';
import cn from 'classnames';

type Props = {
  onClick: () => void
}

const BookAQuote: FC<Props> = ({ onClick }) => {
  return <button className={cn('group relative flex items-center w-[98px] h-[98px] mt-7 max-sm:mx-auto md:w-[130px] md:h-[130px]', cls.container)} onClick={onClick}>
    <p className='text-small text-center -rotate-[115deg] transition-colors duration-500 group-hover:text-blue1'>Book a free quote</p>
    <svg
      className='absolute -rotate-[115deg] right-[53%] -top-[25%] md:right-[56%] md:-top-[16%]'
      width="63" height="8" viewBox="0 0 63 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M62.3536 4.35355C62.5488 4.15829 62.5488 3.84171 62.3536 3.64645L59.1716 0.464466C58.9763 0.269204 58.6597 0.269204 58.4645 0.464466C58.2692 0.659728 58.2692 0.976311 58.4645 1.17157L61.2929 4L58.4645 6.82843C58.2692 7.02369 58.2692 7.34027 58.4645 7.53553C58.6597 7.7308 58.9763 7.7308 59.1716 7.53553L62.3536 4.35355ZM0 4.5H62V3.5H0V4.5Z" fill="#0222A5" />
    </svg>
  </button>
};

export default BookAQuote;