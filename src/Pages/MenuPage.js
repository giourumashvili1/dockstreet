import React from 'react'
import { MenuContainer, MenuWrapper, Menu,MenuPageWrapper } from '../components/MenuPageComponents/MenuPageElements';
import './Menu.css';
import { productData, productDataTwo } from "../components/Products/data";

function MenuPage(props) {

  return (
    <MenuPageWrapper>
    <MenuContainer>
        <MenuWrapper>
            <Menu>
            <div className="menu">
      <h2 className="menu__title">Dock Street Coffeè Shop</h2>
      <ul className="menu__items">
        <li className="menu__item">
          <h3 className="menu__item-name">{productData[0].name}</h3>
          <p className="menu__item-description">{productData[0].desc}</p>
          <span className="menu__item-price">{productData[0].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productData[1].name}</h3>
          <p className="menu__item-description">{productData[1].desc}</p>
          <span className="menu__item-price">{productData[1].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productData[2].name}</h3>
          <p className="menu__item-description">{productData[2].desc}</p>
          <span className="menu__item-price">{productData[2].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productData[3].name}</h3>
          <p className="menu__item-description">{productData[3].desc}</p>
          <span className="menu__item-price">{productData[3].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productDataTwo[0].name}</h3>
          <p className="menu__item-description">{productDataTwo[0].desc}</p>
          <span className="menu__item-price">{productDataTwo[0].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productDataTwo[1].name}</h3>
          <p className="menu__item-description">{productDataTwo[1].desc}</p>
          <span className="menu__item-price">{productDataTwo[1].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productDataTwo[2].name}</h3>
          <p className="menu__item-description">{productDataTwo[2].desc}</p>
          <span className="menu__item-price">{productDataTwo[2].price}</span>
        </li>
        <li className="menu__item">
          <h3 className="menu__item-name">{productDataTwo[3].name}</h3>
          <p className="menu__item-description">{productDataTwo[3].desc}</p>
          <span className="menu__item-price">{productDataTwo[3].price}</span>
        </li>
        
        
      </ul>
    </div>
            </Menu>
        </MenuWrapper>
    </MenuContainer>
    </MenuPageWrapper>
    

  )
}

export default MenuPage