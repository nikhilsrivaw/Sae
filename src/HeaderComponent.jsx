
import { Link } from 'react-router-dom';
const HeaderComponent = () => {

  
  return (
    <section>
    <header>
      <div className="navbar">
        <figure className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ohKqxLk4_kfhWk4eA1cW7LigCMhQXqFsFA&s" alt="Logo" />
        </figure>
        <ul className="links">
        <Link to="/">
              <button className='button1'>Home</button>
            </Link>
          <li>
            
          
          

         

          <Link to="/event1">
              <button className='button1'>Events</button>
            </Link>
          </li>
          <li>
            <Link to="/post">
            <button className='button1'>Our Team</button>
            </Link>
          </li>
          <li>
            <Link to="/sponsor">
            <button className='button1'>Sponsor</button>
            </Link>
          </li>
          <li>
            <Link to="/creator">
            <button className='button1'>Creator</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
    </section>
  );
};

export default HeaderComponent;