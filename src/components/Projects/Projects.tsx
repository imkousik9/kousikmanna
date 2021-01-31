import { projectPropsType } from '../../pages';
import Project from './Project';
import style from './Projects.module.css';

function Projects({ projects }) {
    return (
        <section id="projects" className={style.projects}>
            <h2>Projects</h2>
            <div className={style.projects__list}>
                {projects?.map((project: projectPropsType) => {
                    return (
                        <Project
                            key={project.title}
                            title={project.title}
                            image={project.image.url}
                            url={project.url}
                            githubRepo={project.gitHubRepository}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
