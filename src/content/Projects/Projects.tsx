import ProjectCard, { ProjectCardProps } from '../../components/ProjectCard/ProjectCard';
import Translator from '../../components/Translator/Translator';
import './Projects.scss';
import PortfolioImage from './../../assets/image/projects/portfolio.png';

function Projects() {
    const projects: ProjectCardProps[] = [
        {
            name: 'Portfolio',
            image: PortfolioImage,
            skills: ['React', 'Typescript', 'HTML', 'SASS', 'Cypress'],
            descriptionId: 'portfolio-description',
            github: 'https://github.com/ErickSasaki?tab=repositories',
        },
    ];

    return (
        <section id='projects' className='section'>
            <h2>
                <Translator id="projects" />
            </h2>

            <div className="cards-wrapper">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
