import Avatar from '../../components/Avatar/Avatar';
import './Introduction.scss';

function Introduction() {
  return (
    <div className='introduction'>
      <Avatar></Avatar>

      <div className='introduction-wrapper'>
        <p className='greeting animate'>
          Hi, I'm
        </p>

        <p className='personal-name animate'> Erick Batista </p>

        <p className='title animate'> I'm a Front end Developer who likes to write high quality code for high quality projects! </p>
      </div>
    </div>
  );
}

export default Introduction;
