import { ReactNode } from 'react';
import Translator from '../../components/Translator/Translator';
import './Skills.scss';
import { IoLogoIonic, IoLogoReact, IoLogoSass } from "react-icons/io5";
import { TranslationIds } from '../../consts/translation';
import Card from '../../components/Card/Card';
import AngularIcon from '../../assets/icons/AngularIcon';
import Html5Icon from '../../assets/icons/Html5Icon';
import Css3Icon from '../../assets/icons/Css3Icon';
import JsIcon from '../../assets/icons/JsIcon';
import TsIcon from '../../assets/icons/TsIcon';
import JestIcon from '../../assets/icons/JestIcon';
import JasmineIcon from '../../assets/icons/JasmineIcon';
import CypressIcon from '../../assets/icons/CypressIcon';
import { ImGit } from "react-icons/im";

interface SkillInfo {
    name: string;
    icon: ReactNode;
};

type SkillList = Partial<Record<TranslationIds, SkillInfo[]>>;

function Skills() {
    const skillList: SkillList = {
        main: [
            { name: 'Angular', icon: <AngularIcon /> },
            { name: 'React', icon: <IoLogoReact color="#149eca" /> },
            { name: 'React Native', icon: <IoLogoReact color="#149eca" /> },
            { name: 'Ionic', icon: <IoLogoIonic color="#176BFF" /> },
        ],
        base: [
            { name: 'HTML', icon: <Html5Icon /> },
            { name: 'CSS', icon: <Css3Icon /> },
            { name: 'SASS', icon: <IoLogoSass color="F06292" /> },
            { name: 'Javascript', icon: <JsIcon /> },
            { name: 'Typescript', icon: <TsIcon /> },
        ],
        tests: [
            { name: 'Jest', icon: <JestIcon style={{ height: 40 }} /> },
            { name: 'Jasmine', icon: <JasmineIcon style={{ height: 40 }} /> },
            { name: 'Cypress', icon: <CypressIcon style={{ height: 40 }} /> },
        ],
        others: [
            { name: 'Git', icon: <ImGit color="#de4c36"/> },
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
                                    value.map((skill, index) => (
                                        <Card style={{ animationDelay: `${index / 4}s` }}>
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
