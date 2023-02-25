import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { useShoppingCart } from '../../context/shoppingCartContext'
import Dropdown from '../Dropdown'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import ShoppingCart from '../ShoppingCart'


    
    
const Nav = styled.nav`
    //background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    background: black;
    height: 80px;
    //margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

const NavbarContainer= styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    z-index:1;
    padding: 0 24px; 
    max-width: 1110px;
`;

const NavLogo = styled(LinkRouter)`
    color:#fff;
    justify-self: flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left:24px;
    font-weigh: bold;
    text-decoration: none;
`;


const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
    }
`;

const NavMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`;


const NavItem = styled.li`
    height: 80px;
`;

const NavLink = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

const NavBtn= styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const NavBtnLink= styled(LinkRouter)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background: #fff;
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
    
`


const NavLink1 = styled(LinkRouter)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;
    

const Navbar = ({ toggle }) => {
  
  
  const {openCart, cartQuantity, isOpen} = useShoppingCart()  

  const [logged, setLogged]=useState(true);

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
                        <NavLink1 to="/community" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Community</NavLink1>
                    </NavItem>
                    
                </NavMenu>

                {
                    logged ?
                    (
                        <>
                        <NavBtn>

                        <Dropdown/>
                        {cartQuantity > 0 && (
                            <ShoppingCart isOpen={isOpen}>
                                {cartQuantity}
                            </ShoppingCart>
                               
                            )}
                        </NavBtn>
                        </>
                        
                    )
                    :
                    (
                    <NavBtn>
                          
                        <NavBtnLink to="/login" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Log In</NavBtnLink> 
                        <NavBtnLink to="/userprofile" smooth={true} duration={500} spy={true} exact='true' offset={-80}>userprofile</NavBtnLink>
                        {cartQuantity > 0 && (
                            <ShoppingCart isOpen={isOpen}>
                                {cartQuantity}
                            </ShoppingCart>
                               
                            )}
                        
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


//<NavBtnLink  smooth={true} duration={500} spy={true} exact='true' offset={-80}><ShoppingCartIcon/></NavBtnLink> 