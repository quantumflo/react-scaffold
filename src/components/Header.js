import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [session, setSession] = useState("Login");
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='main-logo' src='https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg' alt='logo' />
        </div>
        <div className='nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><Link to='#'>Cart</Link></li>
            <button className="login-btn"  onClick={() => session==='Login'? setSession("Logout") : setSession("Login") }>{session}</button>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;