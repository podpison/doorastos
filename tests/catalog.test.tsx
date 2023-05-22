import { ProductType } from "@/redux/reducers/static";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from '../pages/catalog/products/index';

describe('Catalog', () => {
  const products: ProductType[] = [
    {
      name: 'Expert pro tb1',
      img: 'https://i.postimg.cc/wTc75YgT/img.png',
      price: 46000,
      material: 'Scandinavian oak',
      id: 0,
      security: 'Armored',
      where: 'apartment',
      finishing: 'Solid',
      color: 'Wenge',
      discount: 10,
    },
    {
      name: 'Expert pro arm1',
      img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
      price: 55000,
      material: 'Scandinavian oak',
      security: 'Armored',
      where: 'apartment',
      finishing: 'Solid',
      color: 'Wenge',
      id: 1,
    },
    {
      name: 'Expert pro tarm1',
      img: 'https://i.postimg.cc/Dwn4RyBX/img-2.png',
      price: 32999,
      material: 'Scandinavian oak',
      security: 'Tamperproof',
      where: 'apartment',
      finishing: 'MDF overlays',
      color: 'Wenge',
      id: 2,
    },
    {
      name: 'Expert pro tb2',
      img: 'https://i.postimg.cc/wTc75YgT/img.png',
      price: 24000,
      material: 'Scandinavian oak',
      id: 3,
      security: 'With thermal break',
      where: 'house',
      finishing: 'With glass and mirror',
      color: 'White',
      discount: 20,
    },
    {
      name: 'Expert pro arm2',
      img: 'https://i.postimg.cc/8PV7rz80/img-1.png',
      price: 68999,
      material: 'Scandinavian oak',
      security: 'Armored',
      where: 'apartment',
      finishing: 'With glass and mirror',
      color: 'Wenge',
      id: 4,
    },
  ];

  test('Render items', () => {
    render(<Products
      itemsPerPage={10}
      allItems={products}
      activeSecurityItem={null}
      startPriceFromItem={null}
      whereItem={undefined}
      activeCategoryItems={[]}
    />);

    expect(screen.getByTestId('items').children.length).toBe(products.length);
  });
  test('Render with security setting', async () => {
    const setting: ProductType['security'] = 'Tamperproof';

    render(<Products
      itemsPerPage={10}
      allItems={products}
      activeSecurityItem={setting}
      startPriceFromItem={null}
      whereItem={undefined}
      activeCategoryItems={[]}
    />);

    let productsWithSetting = products.filter(p => p.security === setting);

    expect(screen.getByTestId('items').children.length).toBe(productsWithSetting.length);
  });
  // test('Render with start price from', async () => {
  //   const startPriceFrom: PriceFromType = 'Ascending';

  //   render(<Products
  //     itemsPerPage={10}
  //     allItems={products}
  //     activeSecurityItem={null}
  //     startPriceFromItem={startPriceFrom}
  //     whereItem={undefined}
  //     activeCategoryItems={[]}
  //   />);
  
  //   let itemPrices = Array.from(screen.getByTestId('items').children).map(c => c.getAttribute('data-price'));
  //   let itemsInAscendingOrder = [...itemPrices].sort((a, b) => Number(a) - Number(b));
  //   console.log(itemPrices, itemsInAscendingOrder)
  //   expect(itemPrices).toMatchObject(itemsInAscendingOrder)
  // });
  test('Render with all the settings', () => {
    render(<Products
      itemsPerPage={10}
      allItems={products}
      activeSecurityItem={'Armored'}
      startPriceFromItem={"Descending"}
      whereItem={'apartment'}
      activeCategoryItems={[
        {
          category: 'color',
          items: ['Wenge']
        }
      ]}
    />);

    expect(screen.getByTestId('items').children.length).toBe(3);
  });
})