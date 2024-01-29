import { ReactNode } from 'react';
import Divider from '../../components/Divider/Divider';
import Translator from '../../components/Translator/Translator';
import './Skills.scss';
import { IoLogoAngular } from "react-icons/io5";
import { TranslationIds } from '../../consts/translation';
import Card from '../../components/Card/Card';
import AngularIcon from '../../assets/icons/AngularIcon';

interface SkillInfo {
    name: string;
    icon: ReactNode;
};

type SkillList = Partial<Record<TranslationIds, SkillInfo[]>>;

function Skills() {
    const skillList: SkillList = {
        main: [
            { name: 'Angular', icon: <AngularIcon /> },
            { name: 'React', icon: <IoLogoAngular /> },
            { name: 'React Native', icon: <IoLogoAngular /> },
            { name: 'Ionic', icon: <IoLogoAngular /> },
        ],
        tests: [
            { name: 'Jest', icon: <IoLogoAngular /> },
            { name: 'Jasmine', icon: <IoLogoAngular /> },
            { name: 'Karma', icon: <IoLogoAngular /> },
            { name: 'Cypress', icon: <IoLogoAngular /> },
        ],
        base: [
            { name: 'HTML', icon: <IoLogoAngular /> },
            { name: 'CSS', icon: <IoLogoAngular /> },
            { name: 'Scss', icon: <IoLogoAngular /> },
            { name: 'Javascript', icon: <IoLogoAngular /> },
            { name: 'Typescript', icon: <IoLogoAngular /> },
        ],
        others: [
            { name: 'Git', icon: <IoLogoAngular /> },
            { name: 'Scrum', icon: <IoLogoAngular /> },
        ],
    };

    return (
        <section id="skills" className='section'>
            <h2>
                <Translator id="skills" />
            </h2>

            <div className="skill-section-wrapper">
                {
                    Object.entries(skillList).map(([key, value]) => (
                        <div key={key} className="skill-section">
                            <h3>
                                <Translator id={key as TranslationIds} />
                            </h3>

                            <div className="skill-icons-wrapper">
                                {
                                    value.map((skill) => (
                                        <Card>
                                            <div className="skill-card">
                                                {skill.icon}
                                                <p> {skill.name} </p>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
}

export default Skills;
