import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useShoppingCart } from '../context/shoppingCartContext'
import List from '@mui/material/List';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import { Container } from '@mui/material';

const Checkout = () => {

  const { 
    cartItems
  } = useShoppingCart()

  return (
    <div> 
        <Navbar />
        <Container
        sx={{
          marginTop:'100px'
        }}
        >

        <h3>Carrello</h3>
        <List>
        {
            cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} {...item} old={false} />
                )
            })
        }
        <br />
        {/* 
        <h5 
            style={{textAlign: 'right', marginRight: 1}}
        ><b> Total: {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.find(i => i.id === cartItem.id)
                return total + (item?.prezzo || 0) * cartItem.quantity
              }, 0))
            }</b>
        </h5>
          */}
      </List>
        </Container>
        
        <Footer />
    </div>
  )
}

export default Checkout