import { useContext } from 'react';

import logoBM from '../assets/logo-bombyx-mori.png';
import logoContact from '../assets/icon-contact.png';
import header from './Header.module.css';
import MenuContext from '../context/menu';

const Header = () => {
  const { isMenuVisible, setIsMenuVisible } = useContext(MenuContext)

  return (
    <div className={header.header__container}>
      <button className={isMenuVisible ? header.header__closeButton : header.header__menuButton} onClick={() => setIsMenuVisible(!isMenuVisible)} ></button>
      <img src={logoBM} alt='logo Bombyx Mori' className={header.header__logo}/>
      <img src={logoContact} alt='Contact' className={header.header__contactButton}/>
    </div>
  );
}

export default Header;
