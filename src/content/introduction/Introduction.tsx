import Avatar from '../../components/Avatar/Avatar';
import Translator from '../../components/Translator/Translator';
import './Introduction.scss';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

function Introduction() {
  return (
    <section id='introduction' className='section'>
      <Avatar></Avatar>

      <div className='introduction-wrapper'>
        <p className='greeting animate'>
          <Translator id="hi-im" />
        </p>

        <h1 className='personal-name animate'> Erick Batista </h1>

        <p className='title animate'>
          <Translator id="introduction" />
        </p>

        <p className='experience animate'>
          <Translator id="experience" />
        </p>
      
        <p className='icons animate'>
          <a href="https://github.com/ErickSasaki" target='blank'>
            <IoLogoGithub id="github-icon"/>
          </a>

          <a href="https://www.linkedin.com/in/erick-batista-da-silva-developer/" target='blank'>
            <IoLogoLinkedin id="linkedin-icon"/>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Introduction;
