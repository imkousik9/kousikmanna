import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import style from './Project.module.css';

interface ProjectProps {
  title: string;
  image: string;
  url: string;
  githubRepo?: string;
  description?: string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Project: React.FC<ProjectProps> = ({
  title,
  image,
  url,
  githubRepo,
  description
}) => {
  return (
    <div className={style.project}>
      <Image
        className={style.project__image}
        src={image}
        alt={title}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(350, 200))}`}
        width={350}
        height={200}
      />

      <div className={style.project__info}>
        <p className={style.project__name}>{title}</p>
        <p className={style.project__description}>{description}</p>
      </div>
      <div className={style.project__links}>
        <NextLink href={url}>
          <a target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </NextLink>
        <NextLink href={githubRepo}>
          <a target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
        </NextLink>
      </div>
    </div>
  );
};

export default Project;
