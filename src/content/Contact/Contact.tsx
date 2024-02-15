import { IoLogoLinkedin } from 'react-icons/io5';
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
                <IoLogoLinkedin />
            </div>
        </section>
    );
}

export default Contact;
