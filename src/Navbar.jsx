import react from 'react';
import './Navbar.css';
import profilPic from './images/profile.PNG';
import logoPic from './images/sopra_logo.jpg';

function Navbar() {
  return (
      <div className = 'navbar'>
        <img className = 'img-2' src={logoPic} alt='not found'/>
        <h3 className = 'logo'>PEOPLE CONNECT</h3>
        <div className = 'container-one'>
          <img className = 'img-1' src={profilPic} alt='not found'/>
        </div>
      </div>
  );
}

export default Navbar;
