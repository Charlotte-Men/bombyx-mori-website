import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuContext from '../context/menu';

import menu from './Menu.module.css';

const Menu = () => {
  const navigate = useNavigate();
  const { setIsMenuVisible } = useContext(MenuContext)

  function handleClick(url: string) : void {
    setIsMenuVisible(false);
    navigate(url);
  }

  return (
    <div className={menu.menu__container}>
      <button><h1>Musique</h1></button>
      <button><h1>Bombyx Story</h1></button>
      <button onClick={() => handleClick('/concerts')}><h1>Concerts</h1></button>
      <button><h1>Photos / Vidéos</h1></button>
      <button><h1>Merch</h1></button>
      <button><h1>Contact</h1></button>
    </div>
  );
}

export default Menu;
