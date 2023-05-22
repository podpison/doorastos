import Image, { ImageProps } from 'next/image';
import { FC } from 'react';
import cn from 'classnames';

type Props = {

} & ImageProps

const ScreenBg: FC<Props> = ({ src, alt, className }) => {
  return <Image className={cn('leftContainer absolute top-0 w-screen h-full max-w-[100vw] -z-20', className)} src={src} alt={alt} />
};

export default ScreenBg;