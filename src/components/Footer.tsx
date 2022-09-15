import footer from './Footer.module.css';
import FbIcon from '../assets/icon-facebook.png';
import InstaIcon from '../assets/icon-instagram.png';
import MsgIcon from '../assets/icon-messenger.png';
import YtIcon from '../assets/icon-youtube.png';

const Footer = () => {
  return (
    <div className={footer.menu__container}>
      <div className={footer.icon__container}>
        <a href="https://www.facebook.com/thebombyxmori" target="_blank" rel="noreferrer" >
          <img src={FbIcon} alt='Facebook'className={footer.facebookIcon} />
        </a>
        <a href="https://www.facebook.com/messages/t/184249778277236" target="_blank" rel="noreferrer" >
          <img src={MsgIcon} alt='Facebook'className={footer.facebookIcon} />
        </a>
        <a href="https://www.instagram.com/bombyxmori75" target="_blank" rel="noreferrer" >
          <img src={InstaIcon} alt='Facebook'className={footer.facebookIcon} />
        </a>
        <a href="https://www.youtube.com/channel/UCOeVDEb2Fgx7UOLf-4VJ1vg" target="_blank" rel="noreferrer" >
          <img src={YtIcon} alt='Facebook'className={footer.facebookIcon} />
        </a>
      </div>
      <button>Mentions légales</button>
    </div>
  );
}

export default Footer;
