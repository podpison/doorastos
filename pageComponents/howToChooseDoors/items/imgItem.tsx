import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

export type HowToChooseDoorsImgItemProps = {
  img: string
  alt: string
}

const ImgItem: FC<HowToChooseDoorsImgItemProps> = ({ img, alt }) => {
  return <Image
    className='relative left-[calc((-100vw_-_-100%)_/_2)] w-screen object-cover max-w-none min-h-[250px]'
    src={img}
    alt={alt}
    width={0} height={0}
    sizes='100vw'
    priority
  />
};

export default ImgItem;