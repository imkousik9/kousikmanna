import style from './Home.module.css';
import HomeCard from './HomeCard';

function Home() {
  return (
    <section id="home" className={style.home}>
      <div className={style.home__intro}>
        <div className={style.home__text}>
          <p>Hello, I’m</p>
          <h1>Kousik Manna</h1>
          <p>FULL-STACK WEB DEVELOPER</p>

          <div className="home__CTA">
            <div className="home__social"></div>
          </div>
        </div>
      </div>
      <HomeCard />
    </section>
  );
}

export default Home;
