import { Items } from '@/lib/api';
import Project from './Project';
import style from './Projects.module.css';

type ProjectsListProps = {
  projects: Array<Items>;
};

function Projects({ projects }: ProjectsListProps) {
  return (
    <section id="projects" className={style.projects}>
      <h2>Projects</h2>
      <div className={style.projects__list}>
        {projects?.map((project: Items) => {
          return (
            <Project
              key={project.sys.id}
              title={project.title}
              image={project.image.url}
              url={project.url}
              githubRepo={project.gitHubRepository}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
