import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";

import styled from "styled-components";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { Rating } from "@mui/material";
import {  red } from '@mui/material/colors';
import { formatCurrency } from "../../utilities/formatCurrency";

  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

  const Icon1 = styled(IconButton)`
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: white,
    display: flex,
    alignItems: center,
    justifyContent: center,
    margin: 10,
    '&:hover' :{
      background-color: #e9f5f5,
      transform: scale(1.1),
    }
  `
  
  const Product = ({ item }) => {
    return (
      <Card variant="outlined" sx={{ width: 320, marginBottom: 0.1 }}>
      <CardOverflow>
        <AspectRatio ratio="1">
          <img
            src={item.image}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <IconButton
          aria-label="Like minimal photography"
          
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}
        >
          <Favorite
           size="md"
           sx={{ 
            color: 'white',
            border: '3px solid red',
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            backgroundColor: red[500]
            
            }} />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        <Link href="/store/prodotti/1" overlay underline="none">
          {item.nome}
        </Link>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        {formatCurrency(item.prezzo)} 
      </Typography>
      <Rating value={3} readOnly />
      <Divider inset="context" />
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          Tags:
        </Typography>
        <Divider orientation="vertical" />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          {item.animale}
        </Typography>
      </CardOverflow>
    </Card>
    );
  };
  
  export default Product;

  /*
<Container >
        <Circle />
        <Image src={item.image} />
        <Info>
          <IconButton  
            href="/store/prodotti?animale=gatto" 
            sx={{
              width: 40,
              height: 40,
              borderRadius: 50,
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 3,
              
              '&:hover' :  {
                backgroundColor: '#e9f5f5',
                
              }
            }}
            >
            <ShoppingCartOutlined  />
          </IconButton>
          <IconButton
            href="/store/prodotti?animale=gatto" 
            sx={{
              width: 40,
              height: 40,
              borderRadius: 50,
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 3,
              
              '&:hover' :  {
                backgroundColor: '#e9f5f5',
                
              }
            }}
          >
            <SearchOutlined />
          </IconButton>
          <IconButton
          href="/store/prodotti?animale=gatto" 
          sx={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 3,
            
            '&:hover' :  {
              backgroundColor: '#e9f5f5',
              
            }
          }}
          >
            <FavoriteBorderOutlined />
          </IconButton>
        </Info>
      </Container>
  */
  