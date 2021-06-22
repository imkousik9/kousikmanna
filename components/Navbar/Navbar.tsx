import NextLink from 'next/link';
import style from './Navbar.module.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className={style.navbar}>
      <nav className={style.navbar__nav}>
        <ul className={style.navbar__items}>
          <li className={style.navbar__item}>
            <NextLink href="/#home">
              <a>home</a>
            </NextLink>
          </li>
          <li className={style.navbar__item}>
            <NextLink href="/#about">
              <a>about me</a>
            </NextLink>
          </li>
          <li className={style.navbar__item}>
            <NextLink href="/#projects">
              <a>projects</a>
            </NextLink>
          </li>

          <li className={style.navbar__item}>
            <NextLink href="/#contact">
              <a>contact</a>
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
