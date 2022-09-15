import { concertsList } from '../assets/concert';
import photoConcert from '../assets/photo-concerts.png';
import comeAndPlay from '../assets/img-comeAndPlay.png';
import concerts from './Concerts.module.css';

const Concerts = () => {
  return (
    <div className={concerts.concerts__container}>
      <img src={photoConcert} alt='Concert' className={concerts.concerts__mainPhoto} />
      <h1>Concerts</h1>
      <div className={concerts.concertsList__container}>
        {
          concertsList.map((show) =>{
            return (
              <span key={concertsList.indexOf(show)}> {show.date} &#183; {show.place} |</span>
            )
          })
        }
      </div>
      <div className={concerts.concerts__comeAndPlay} >
        <img src={comeAndPlay} alt='Concert' />
        <button><h2>Par ici</h2></button>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vLHGzGMKPzQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default Concerts;
