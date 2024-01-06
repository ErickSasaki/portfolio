import Avatar from '../../components/Avatar/Avatar';
import './Introduction.scss';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

function Introduction() {
  return (
    <div id='introduction' className='introduction'>
      <Avatar></Avatar>

      <div className='introduction-wrapper'>
        <p className='greeting animate'>
          Hi, I'm
        </p>

        <p className='personal-name animate'> Erick Batista </p>

        <p className='title animate'> I'm a Front end Developer who likes to write high quality code for high quality projects! </p>
      
        <p className='icons animate'>
          <a href="https://github.com/ErickSasaki" target='blank'>
            <IoLogoGithub />
          </a>

          <a href="https://www.linkedin.com/in/erick-batista-da-silva-developer/" target='blank'>
            <IoLogoLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Introduction;
