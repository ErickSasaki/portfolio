import Avatar from '../../components/Avatar/Avatar';
import Translator from '../../components/Translator/Translator';
import './Introduction.scss';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

function Introduction() {
  return (
    <div id='introduction' className='introduction'>
      <Avatar></Avatar>

      <div className='introduction-wrapper'>
        <p className='greeting animate'>
          <Translator id="hi-im" />
        </p>

        <p className='personal-name animate'> Erick Batista </p>

        <p className='title animate'>
          <Translator id="introduction" />
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
    </div>
  );
}

export default Introduction;
