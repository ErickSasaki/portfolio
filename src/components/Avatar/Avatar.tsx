import './Avatar.scss';
import profilePicture from './../../assets/profile-picture.jpg';

function Avatar() {
  return (
    <div className='avatar animate'>
      <img src={profilePicture} alt="My Profile Picture" />
    </div>
  );
}

export default Avatar;
