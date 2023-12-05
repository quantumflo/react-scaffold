const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  }

  export default Header;