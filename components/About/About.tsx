import style from './About.module.css';
import Skill from './Skill';

function About() {
  return (
    <section id="about" className={style.about}>
      <h2>About Me</h2>
      <p>
        Hi, I'm Kousik Manna, a passionate self-taught web developer from India,
        I started programming with C in school then I jumped to javascript for
        Web App development and now I am working with Node.js, React.js. I tend
        to make use of modern web technologies to build websites that look
        great, feel fantastic, and function correctly. I am especially focusing
        on Reactjs, and I love using Nextjs on my projects.
      </p>

      <Skill />
    </section>
  );
}

export default About;
