import photoConcert from '../assets/photo-concerts.png';
import concerts from './Concerts.module.css';

const Concerts = () => {
  return (
    <div className={concerts.concerts__container}>
      <img src={photoConcert} alt='Concert' className={concerts.concerts__mainPhoto} />
      <h1>Concerts</h1>
    </div>
  );
}

export default Concerts;
