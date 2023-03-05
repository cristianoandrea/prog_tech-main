import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useShoppingCart } from '../context/shoppingCartContext'
import List from '@mui/material/List';
import CartItem from '../components/CartItem';
import { Buttone } from '../pages/prodotto_singolo';
import { formatCurrency } from '../utilities/formatCurrency';
import { Container } from '@mui/material';
import Sidebar from '../components/Sidebar';

const Checkout = () => {

  const { 
    cartItems
  } = useShoppingCart()

  const[isOpen, setIsOpen] = useState(false)
 
    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Container
        sx={{
          marginTop:'100px'
        }}
        >

        <h3>Che gusto fratè</h3>
        <List>
        {
            cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} {...item} old={false} />
                )
            })
        }
        <br />
        
      </List>
        </Container>
        
        <Footer />
    </div>
  )
}

export default Checkout

/*
<h5 
            style={{textAlign: 'right', marginRight: 1}}
        ><b> Total: {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.find(i => i.id === cartItem.id)
                return total + (item?.prezzo || 0) * cartItem.quantity
              }, 0))
            }</b>
        </h5>
*/