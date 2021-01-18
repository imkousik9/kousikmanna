import React from 'react';
import NextLink from 'next/link';
import style from './Project.module.css';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
    title: string;
    image: string;
    url: string;
    githuhRepo?: string;
}

const Project: React.FC<ProjectProps> = ({ title, image, url, githuhRepo }) => {
    return (
        <div className={style.project}>
            <div className={style.project__imgageContainer}>
                <img className={style.project__image} src={image} alt="" />
                <div className={style.project__icons}>
                    <NextLink href={url}>
                        <a
                            target="__bank"
                            className={style.project__iconsRoundedSqir}
                        >
                            Live Demo
                        </a>
                    </NextLink>
                    <NextLink href={githuhRepo}>
                        <a
                            target="__bank"
                            className={style.project__iconsRound}
                        >
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
