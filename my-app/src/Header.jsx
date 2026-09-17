import logo from './assets/Logofooter1.png'
function Header() {
    return (
      <header>
        <img  className='logo' src={logo} alt="Little Lemon logo" />
      <nav className='nav-bar'>
       <ul className='nav-links'>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/booking">Reservations</a></li>
        <li><a href="/about">About</a></li>
       </ul>
      </nav>
      <button className="menu-icon">☰</button>
      </header>
    );
  }
  
  export default Header;