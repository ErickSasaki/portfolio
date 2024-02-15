import { IoLogoGithub } from 'react-icons/io5';
import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import './ProjectCard.scss'
import { TranslationIds } from '../../consts/translation/ids';
import Translator from '../Translator/Translator';

export interface ProjectCardProps {
    name: string;
    descriptionId: TranslationIds;
    image: string;
    skills: string[];
    github: string;
}

function ProjectCard({ name, image, skills, descriptionId, github }: ProjectCardProps) {
    return (
        <div className="project-card">
            <Card>
                <div className="project-image-wrapper">
                    <img src={image} alt={name} />
                </div>

                <div className="project-info">
                    <h3> {name} </h3>

                    <p className="description">
                        <Translator id={descriptionId} />
                    </p>

                    <h4> Skills </h4>

                    <div className="tags">
                        {
                            skills.map((skill) => (
                                <Tag>
                                    <p> {skill} </p>
                                </Tag>
                            ))
                        }
                    </div>

                    <h4>
                        Links
                    </h4>

                    <div className="links">
                        <a className="github-link" href={github} target='blank'>
                            <IoLogoGithub id="github-icon" />
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ProjectCard;
