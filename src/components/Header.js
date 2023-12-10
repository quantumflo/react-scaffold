const { useState } = require("react");

const Header = () => {
  const [session, setSession] = useState("Login");
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='main-logo' src='https://icon-library.com/images/food-app-icon/food-app-icon-12.jpg' alt='logo' />
        </div>
        <div className='nav'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About us</a></li>
            <li><a href='#'>Contact us</a></li>
            <li><a href='#'>Cart</a></li>
            <button className="login-btn"  onClick={() => session==='Login'? setSession("Logout") : setSession("Login") }>{session}</button>
          </ul>
        </div>
      </div>
    );
  }

  export default Header;