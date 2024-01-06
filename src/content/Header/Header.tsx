import Avatar from '../../components/Avatar/Avatar';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <Avatar></Avatar>

      <div className='introduction-wrapper'>
        <p className='introduction animate'>
          Hi, I'm
        </p>

        <p className='personal-name animate'> Erick Batista </p>

        <p className='title animate'> I'm a Front end Developer who likes to write high quality code for high quality projects! </p>
      </div>
    </header>
  );
}

export default Header;
