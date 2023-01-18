import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useShoppingCart } from '../context/shoppingCartContext';
import CartItem from './CartItem';
import { Buttone, data } from '../pages/prodotto_singolo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavBtnLink } from './Navbar';
import { formatCurrency } from '../utilities/formatCurrency';
import { Typography } from '@mui/joy';




export default function ShoppingCart({isOpen}) {
  
  const { 
    openCart,
    closeCart,
    cartItems
  } = useShoppingCart()
  const [state, setState] = React.useState({
    right: isOpen,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if(open==true) {openCart()}
    else closeCart();
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450,
        marginTop: 2, 
        marginLeft: 1,
        
    }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3><b>Carrello</b></h3>
      <Divider />
      <List>
        {
            cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} {...item} />
                )
            })
        }
        <br />
        <h5 
            style={{textAlign: 'right', marginRight: 1}}
        ><b> Total: {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.find(i => i.id === cartItem.id)
                return total + (item?.prezzo || 0) * cartItem.quantity
              }, 0))
            }</b>
        </h5>
      </List>
      
    </Box>
  );

  return (
    <div>
      
    
    
    <React.Fragment key={'right'}>
        <NavBtnLink onClick={toggleDrawer('right', true)}><ShoppingCartIcon/></NavBtnLink>
        <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        >
        {list('right')}
        </Drawer>
    </React.Fragment>
    
    </div>
  );
}

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { FaBars } from 'react-icons/fa'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import styled from 'styled-components'

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

const NavBtnLink= styled(LinkRouter)`
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

const useStyles = makeStyles((theme) => ({
    drawer: {
        background: 'black',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1rem',
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            transition: '0.8s all ease',
        },
    },
    navbarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '80px',
        width: '100%',
        zIndex: 1,
        padding: '0 24px',
        maxWidth: '1110px',
    },
    navLogo: {
        color: '#fff',
        justifySelf: 'flex-start',
        cursor: 'pointer',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
    mobileIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translate(-100%, 60%)',
            fontSize: '1.8rem',
            cursor: 'pointer',
            color: '#fff',
        },
    },
    navMenu: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        textAlign: 'center',
        marginRight: '-22px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    navItem: {
        height: '80px',
    },
    navLink: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: '0 1rem',
        height: '100%',
        cursor: 'pointer',
        '&.active': {
            borderBottom: '3px solid #01bf71',
        },
    },
    navBtn: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
            },
    },
    navBtnLink: {
            borderRadius: '50px',
            background: '#01bf71',
            whiteSpace: 'nowrap',
            padding: '10px 22px',
            color: '#010606',
            fontSize: '16px',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            textDecoration: 'none',
            '&:hover': {
            background: '#fff',
            transition: 'all 0.2s ease-in-out',
            color: '#010606',
            },
    },
    navLink1: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0 1rem',
    height: '100%',
    cursor: 'pointer',
    },
}));
            
const ShoppingCart = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
            <IconButton onClick={handleDrawerOpen} className={classes.mobileIcon}>
                <FaBars />
            </IconButton>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                onClose={handleDrawerClose}
            >
                <List>
                    <ListItem button>
                        <ListItemText>
                            <NavLink1 to="/" className={classes.navLink1} onClick={handleDrawerClose}>
                                Home
                            </NavLink1>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <NavLink1 to="/about" className={classes.navLink1} onClick={handleDrawerClose}>
                                About
                            </NavLink1>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <NavLink1 to="/contact" className={classes.navLink1} onClick={handleDrawerClose}>
                                Contact
                            </NavLink1>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};


export default ShoppingCart
*/