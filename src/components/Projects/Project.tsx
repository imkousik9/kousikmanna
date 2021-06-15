import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import style from './Project.module.css';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  title: string;
  image: string;
  url: string;
  githubRepo?: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, url, githubRepo }) => {
  return (
    <div className={style.project}>
      <div className={style.project__imageContainer}>
        <Image src={image} width={350} height={200} alt={title} />
        <div className={style.project__icons}>
          <NextLink href={url}>
            <a target="_blank" className={style.project__iconsRoundedSquire}>
              Live Demo
            </a>
          </NextLink>
          <NextLink href={githubRepo}>
            <a target="_blank" className={style.project__iconsRound}>
              <FaGithub />
            </a>
          </NextLink>
        </div>
      </div>
      <p className={style.project__info}>{title}</p>
    </div>
  );
};

export default Project;
