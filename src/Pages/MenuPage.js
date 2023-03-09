import React, { useState } from 'react'
import { MenuContainer, MenuWrapper, Menu, MenuPageWrapper } from '../components/MenuPageComponents/MenuPageElements';
import './Menu.css';
import { productData, productDataThree, productDataTwo } from "../components/Products/data";

function MenuPage(props) {
  const [activeSection, setActiveSection] = useState('breakfast');

  return (
    <MenuPageWrapper >
      <MenuContainer>
        <MenuWrapper className='menuWrapper'>
          <Menu className='menuComponent' onClick={e => e.stopPropagation()}>
            <div className="menu">
      <h2 className="menu__title">Dock Street Coffee Shop</h2>
      <nav className='menuNavigation'>
        <a className='breakfastMenuButton' onClick={() => setActiveSection('breakfast')}>Breakfast</a>
        <a className='lunchMenuButton' onClick={() => setActiveSection('lunch')}>Lunch</a>
        <a className='drinksMenuButton' onClick={() => setActiveSection('drinks')}>Drinks</a>
      </nav>
      <ul className="menu__items">
        {activeSection === 'breakfast' && productData.map(item => (
          <li className="menu__item" key={item.name}>
            <h3 className="menu__item-name">{item.name}</h3>
            <p className="menu__item-description">{item.desc}</p>
            <span className="menu__item-price">{item.price}</span>
          </li>
        ))}
        {activeSection === 'lunch' && productDataTwo.map(item => (
          <li className="menu__item" key={item.name}>
            <h3 className="menu__item-name">{item.name}</h3>
            <p className="menu__item-description">{item.desc}</p>
            <span className="menu__item-price">{item.price}</span>
          </li>
        ))}
        {activeSection === 'drinks' && productDataThree.map(item => (
          <li className="menu__item" key={item.name}>
            <h3 className="menu__item-name">{item.name}</h3>
            <p className="menu__item-description">{item.desc}</p>
            <span className="menu__item-price">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
            </Menu>
        </MenuWrapper>
      </MenuContainer>
    </MenuPageWrapper>
  )
}

export default MenuPage