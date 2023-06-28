import textToURL from '@/helpers/textToURL';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export type CategoryType = {
  src: StaticImageData
  name: string
}

type Props = {

} & CategoryType

const Item: FC<Props> = ({ name, src }) => {

  return <Link className='group relative w-fit' href={`additionalOptins?category=${textToURL(name)}`}>
    <p className='text-esm transition-colors group-hover:text-grey2'>{name}</p>
    <Image
      className='mt-2.5 max-lg:min-w-[180px] max-lg:h-[160px]'
      src={src}
      alt={name}
      width={200}
      height={200}
      priority
    />
    <div className='absolute bottom-0 left-0 flex bg-blue1 transition-colors w-10 h-10 group-hover:bg-blue2'>
      <svg className='m-auto' width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.22061 19.9949C0.980552 19.9953 0.785605 19.801 0.785157 19.561C0.784953 19.4452 0.830919 19.3342 0.912867 19.2525L10.1686 9.99757L0.912867 0.742716C0.742899 0.572749 0.742899 0.297199 0.912867 0.127231C1.08283 -0.042736 1.35838 -0.042736 1.52835 0.127231L11.091 9.68986C11.2607 9.85959 11.2607 10.1347 11.091 10.3045L1.52835 19.8671C1.44685 19.9489 1.33609 19.9949 1.22061 19.9949Z" fill="#FEFEFE" />
      </svg>
    </div>
  </Link>
};

export default Item;