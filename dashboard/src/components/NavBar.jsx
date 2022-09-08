import { useState } from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search'

const NavBar = () => {
  const [active, setActive] = useState('home')

  /* Toggle between adding and removing the "responsive" class to top-nav when the user clicks on the icon */
  function respond() {
    var x = document.getElementsByClassName("bottom-nav");
    if (x.className === "bottom-nav") {
      x.className += " responsive";
    } else {
      x.className = "bottom-nav";
    }
  }


  function handleMenuItem(e) {
    e.preventDefault();
    console.log(e.target.name);
    setActive(e.target.name)
  }

  return (
    <div className="bottom-nav">
      <div className="menu-items">
        <ul>
          <li><a name="home" className="active" href="#home"
            onClick={handleMenuItem}>Home</a></li>
          <li><a name="about" href="#about"
            onClick={handleMenuItem}>About</a></li>
          <li><a name="contact" href="#contact"
            onClick={handleMenuItem}>Contact</a></li>
        </ul>
      </div>
      <div className="search-container">
        {/* <form action="/action_page.php"> */}
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log('searching...')
        }}>
          <input className="search-bar" type="text" placeholder="Search.." name="search" />
          <button type="submit"><SearchIcon /></button>
        </form>
      </div>
      {/* <a href="javascript:void(0);" className="icon" onClick={respond}>
      <i className="fa fa-bars"></i>
    </a> */}
    </div>
  )
}

export default NavBar