import style from './Skill.module.css';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiGraphql,
  SiFirebase,
  SiPostgresql
} from 'react-icons/si';

import { FaNode } from 'react-icons/fa';
import { ExpressjsIcon, MongodbIcon, NextjsIcon } from '../icons';

function Skill() {
  return (
    <div className={style.skill}>
      <h2>My Skillsets</h2>
      <div className={style.skill__icons}>
        <SiJavascript />
        <SiTypescript />
        <SiReact />
        <NextjsIcon />
      </div>
      <div className={style.skill__icons}>
        <FaNode />
        <ExpressjsIcon />
        <MongodbIcon />
        <SiPostgresql />
      </div>
      <div className={style.skill__icon}>
        <SiGraphql />
        <SiFirebase />
      </div>
    </div>
  );
}

export default Skill;
