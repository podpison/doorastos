import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Reminder from './reminder';
import Menu from './menu';

const RecentlyWatchedProducts: FC = () => {
  const [cookies] = useCookies(['viewedProducts']);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let viewedProductIds = cookies.viewedProducts as (number[] | undefined);
  const handleOpenMenuStatus = () => setIsMenuOpen(prev => !prev);
  const handleIsVisibleStatus = () => setIsVisible(prev => !prev);

  useEffect(() => {
    if (viewedProductIds && viewedProductIds.length >= 4) {
      setIsVisible(true);
    }
  }, []);

  return <>
    <Reminder isVisible={isVisible} setInvisible={handleIsVisibleStatus} onClick={handleOpenMenuStatus} />
    <Menu isOpen={isMenuOpen} viewedProductIds={viewedProductIds} handleOpenStatus={handleOpenMenuStatus} />
  </>
};

export default RecentlyWatchedProducts;