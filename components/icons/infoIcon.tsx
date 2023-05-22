import { FC, SVGProps } from 'react';
import cn from 'classnames';

type Props = {

} & SVGProps<SVGSVGElement>

const InfoIcon: FC<Props> = ({ className, ...props }) => {
  return <svg className={cn('transition-colors fill-grey4', className)} {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.70079 6.2998H6.30078V10.4998H7.70079V6.2998Z" />
    <path d="M6.99998 0C3.13251 0 0 3.13251 0 6.99998C0 10.8675 3.13251 14 6.99998 14C10.8675 14 14 10.8675 14 6.99998C14 3.13248 10.8675 0 6.99998 0ZM6.99998 12.6C3.91299 12.6 1.39998 10.087 1.39998 6.99998C1.39998 3.91299 3.91299 1.40001 6.99998 1.40001C10.087 1.40001 12.6 3.91299 12.6 6.99998C12.6 10.087 10.087 12.6 6.99998 12.6Z" />
    <path d="M7.70079 3.5H6.30078V4.90001H7.70079V3.5Z" />
  </svg>
};

export default InfoIcon;