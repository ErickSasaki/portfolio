import { IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import { MdOutlineEmail } from "react-icons/md";
import Translator from '../../components/Translator/Translator';
import './Contact.scss';

function Contact() {


    return (
        <section id='contact' className='section'>
            <h2>
                <Translator id="contact" />
            </h2>

            <h3>
                <Translator id="contact-description" />
            </h3>

            <div className="contact-wrapper">
                <a className="icon-wrapper" href='https://www.linkedin.com/in/erick-batista-da-silva-developer/' target='blank'>
                    <IoLogoLinkedin />
                    <p>
                        www.linkedin.com/in/erick-batista-da-silva-developer/
                    </p>
                </a>

                <div className="icon-wrapper">
                    <MdOutlineEmail />
                    <p>
                        erick_batista07@yahoo.com
                    </p>
                </div>

                <div className="icon-wrapper">
                    <IoLogoWhatsapp />
                    <p>
                        +55 (15) 99765-1065
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
