import { Stack } from '@mui/material';
import { useShoppingCart } from '../context/shoppingCartContext'
import { data } from '../pages/prodotto_singolo';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Button, IconButton } from '@mui/joy';
import Link from '@mui/joy/Link';
import { formatCurrency } from '../utilities/formatCurrency';
import { Delete } from '@material-ui/icons';


const CartItem = ({id, quantity, old}) => {
  
  const {removeFromCart, increaseCartQuantity, deleteFromCart} = useShoppingCart();
  const item  = data.find(i => i.id == id)
  if(item==null) return null
  const link= "/store/prodotti/" + id

  return (
    <div>
        <Card row variant="outlined" sx={{ maxWidth: 430 }}>
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img
              src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
              srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ px: 2 }}>
          <Link href={link} fontWeight="md" textColor="success" mb={0.5}>
            {item.name}
          </Link>
          <Typography level="body2">{formatCurrency(item.prezzo)} , x {quantity}</Typography>
          {
            old?
            <>
              {item.data_acquisto}
            </>
            :
            ""
          }
        </CardContent>
        <Divider />
        <CardOverflow
          sx={{
            px: 0.2,
            writingMode: 'vertical-rl',
            textAlign: 'center',
            fontSize: 'xs2',
            fontWeight: 'xl2',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {
            old?
            <></>
            :
            <Button onClick={()=>deleteFromCart(id)} sx={{color: "red"}} ><Delete/></Button>
          }
          

        </CardOverflow>
      </Card>
    </div>
  )
}

export default CartItem
/*



<img src={item.images[0].path} alt={item.images[0].alt} 
            style={{width: "125px", height:"75px" , objectFit: "cover"}} />
*/