import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import Dropdown from '../Dropdown'

import { Nav,
    NavbarContainer,
    NavLogo,
    NavLink,
    NavItem,
    NavMenu,
    MobileIcon,
    NavBtn,
    NavBtnLink,
    NavLink1,} from './NavbarElements'

  
        
    
    

const Navbar = ({ toggle }) => {
  

  const [logged, setLogged]=useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
        setScrollNav(true);
    } else {
        setScrollNav(false);
    }
  }

  useEffect(() =>{
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
        <IconContext.Provider value={ {color: '#fff'} }>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>

                <NavLogo to="/" onClick={toggleHome}>
                    Animal House 
                    </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLink1 to="/" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to="/store" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Store</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to="/presenza" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Presenza</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to="/online" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Online</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 to="/community" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Community</NavLink1>
                    </NavItem>
                    
                </NavMenu>

                {
                    logged ?
                    (
                        <Dropdown/>
                    )
                    :
                    (
                    <NavBtn>    
                        <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
                        <NavBtnLink to="/login" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Log In</NavBtnLink> 
                        <NavBtnLink to="/userprofile" smooth={true} duration={500} spy={true} exact='true' offset={-80}>userprofile</NavBtnLink> 

                    </NavBtn>
                    )
                }
                    
                
                
                
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar