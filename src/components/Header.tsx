import header from './Header.module.css';
import logoBM from '../assets/logo-bombyx-mori.png';
import logoContact from '../assets/icon-contact.png';
import iconMenu from '../assets/icon-menu-white.png'

const Header = () => {
  return (
    <div className={header.header__container}>
      <img src={iconMenu} alt='Menu' className={header.header__menuButton}/>
      <img src={logoBM} alt='logo Bombyx Mori' className={header.header__logo}/>
      <img src={logoContact} alt='Contact' className={header.header__contactButton}/>
    </div>
  );
}

export default Header;