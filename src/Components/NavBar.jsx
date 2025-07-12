import React,{useState,useEffect} from 'react'
import './NavBar.css'
import logo from '../assets/logo.jpg'
import menu from '../assets/menu-icon.png'
import cross from '../assets/cross-icon.png'

const NavBar = () => {
  const [sidebar,setSidebar]= useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const toggleMenu=()=>{
    setSidebar(prev=>!prev);
    
  }
  return (
    <>
    <nav className='navbar'>
        <div className="left">
            <img src={logo} alt="" />
        </div>
        <div className="right">
          <div className="right1">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#properties">Properties</a>
            <a href="#contact">Contact</a>
            <a href="#">Login</a>
            <button>Sign Up</button>
          </div>
          {
            isMobile && (!sidebar) &&
           ( <img src={menu} alt="" onClick={toggleMenu} />)
          }
            
        </div>
        
    </nav>
    <div className={sidebar?'sidebar-menu':'hide'}>
      <div className="sidebar">
        <div className="cross-icon">
          <img src={cross} alt="" onClick={toggleMenu} />
        </div>
          <a href="#Home" onClick={toggleMenu}>Home</a>
          <a href="#About" onClick={toggleMenu}>About</a>
          <a href="#properties" onClick={toggleMenu}>Properties</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="#" onClick={toggleMenu}>Login</a>
          <button>Sign Up</button>
        </div>
      </div>
        </>
  )
}

export default NavBar
