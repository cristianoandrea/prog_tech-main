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
import CloseIcon from '@mui/icons-material/Close';




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
        maxWidth: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450,
        marginTop: 2, 
        marginLeft: 1,
        
    }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button onClick={toggleDrawer(anchor, false)}><CloseIcon/></Button>
      <h3><b>Carrello</b></h3>
      <Divider />
      <List>
        {
            cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} {...item} old={false} />
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
      <a href="/checkout">
        <Buttone>Checkout</Buttone>
      </a>
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