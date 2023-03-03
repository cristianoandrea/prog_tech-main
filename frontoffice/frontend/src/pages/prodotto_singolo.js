import { Accordion, AccordionDetails, AccordionSummary,  Grid, InputLabel, MenuItem, Paper, Rating, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import { borders } from '@mui/system';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Textarea from '@mui/joy/Textarea';
import Sheet from '@mui/joy/Sheet';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Garfield from '../images/garfield.jpg'
import { Divider } from '@mui/joy';
import Recensione from '../components/StorePage/recensione';
import Footer from '../components/Footer'
import Slider from '../components/StorePage/Slider';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/shoppingCartContext';
import ShoppingCart from '../components/ShoppingCart';
import { useParams } from "react-router-dom";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";



const Container1= styled.div`
margin-top:80px;
line-height: 2;
`

const ColonnaDestra=styled.div`
margin-top:20px;
margin-right: 30px;
margin-left: 20px;
`

export const Buttone= styled.button`
width: 300px;
border-radius:50px;
    background: ${({primary})=> (primary ? '#01BF71' : "#010606")};
    white-space:nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark})=> (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: ponter;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? "#fff" : '#01BF71')};
    }
`
const Immagine= styled.img`
width: 100%
`

const SingleProduct = () => {
  const [data,setData]=useState([])
  const [consigliati,setConsigliati] = useState([])
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  async function find_p(){ 
    const response =await fetch("http://localhost:4000/api/item/"+id, {
      method: "GET",
        headers: {
            "Content-Type": "application/json"
        } 
    })
    const product = await response.json(); 
    setData(product)
    const tag = data.tag

    const response2 =await fetch("http://localhost:4000/api/item/filter/tipo", {
      method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({tag}),
    })
    const prod_consigliati =await response2.json()
     setConsigliati(prod_consigliati)
     setLoading(false) 
    console.log(data)
    console.log(consigliati)
  }

  useEffect(()=>{
      console.log(id)
      find_p()
    }, [id])
    

  const {
    isOpen, 
    increaseCartQuantity,
    addToCart
  } = useShoppingCart()

  const [valutazione, setValutazione] = React.useState(0); //la valutazione media del prodotto
  const [open, setOpen] = React.useState(false);
  //indica la quantità che si desidera acquistare
  const [quantity, setQuantity] = React.useState(0);
  //selected è la variabile che indica quale variante del
  //prodotto stiamo scegliendo (esempio il colore)
  //e di conseguenza cambia il numero di elementi riguardanti la
  //quantità acquistabile

  


  const handleChangeQuantity = (event) => {
    console.log(event.target.value)
    setQuantity(event.target.value);
  };

 
  
 
  return (
    <>
    <Navbar/>
    {loading? (""):
    <Container1>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
      
      </Grid>

      <Grid item xs={12} md={7}>
        <ColonnaDestra>
        <div>

          <h2>{data.producer}</h2>
          <h1>{data.nome}</h1>
          <h5>{formatCurrency(data.prezzo)}</h5>
          <label for="read-only">Recensioni:</label>
          <Rating name="read-only" value={data.rating} readOnly />
          <p>{data.descrizione}</p>
          
          <br/>
        </div>
        
        <form>
        
        <FormControl sx={{ 
          maxWidth: 300,
          marginBottom: 10,
          
           }} >
          <InputLabel 
          
            id="demo-simple-select-label"
            sx={{
              typography:{
                fontFamily: 'Encode Sans Expanded',
              }
            }}
            >Type</InputLabel>
          
          <InputLabel sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }
          }} id="demo-simple-select-label">Quantity</InputLabel>
          <Select
          
          sx={{
            borderRadius:3,
            borderColor: 'black',
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }
          }}
            labelId="demo-simple-select-label"
            id="quantity-select"
            defaultValue={'azzurro'}
            label="Quantity"
            onChange={handleChangeQuantity}
            
          >
            
          <MenuItem sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }}} 
            value="1">1</MenuItem>  
          <MenuItem sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }}}  value="2">2</MenuItem>  
          <MenuItem sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }}}  value="3">3</MenuItem>  
          <MenuItem sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }}}  value="4">4</MenuItem>  
          <MenuItem  sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }}} value="5">5</MenuItem>  
            
          </Select>
          <br/>

          <Buttone type='button' onClick={()=>{
            
            addToCart(quantity,data._id);
            
          }} >Add to cart</Buttone>

          
        </FormControl>
        

        </form>
        
        <ShoppingCart isOpen={isOpen} />

        <Accordion sx={{}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Recensioni</Typography>
          </AccordionSummary>
            <AccordionDetails>

            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
              Aggiungi una recensione
            </Button>
            <br/>

              {
                data.recensioni.map((recensione)=>{
                  return(
                  <Recensione
                    key={recensione.id}
                    data={recensione} />
                  )
                })
              }
            
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Prodotti Consigliati</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {
                consigliati.map((item)=>{
                  return(
                    <Card variant="outlined" sx={{ width: 320, marginBottom: 0.1 }}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                       
                          <img src={item.image.path} loading="lazy" alt="" />
                      
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        variant="solid"
                        color="danger"
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                        }}
                      >
                        <Favorite
                          size="md"
                          sx={{
                            color: "white",
                            border: "3px solid red",
                            borderRadius: "50%",
                            right: "1rem",
                            bottom: 0,
                            backgroundColor: red[500],
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      <Link href="/store/prodotti/{item._id}" overlay underline="none">
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
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        bgcolor: "background.level1",
                      }}
                    >
                      <Typography
                        level="body3"
                        sx={{ fontWeight: "md", color: "text.secondary" }}
                      >
                        Tags:
                      </Typography>
                      <Divider orientation="vertical" />
                      <Typography
                        level="body3"
                        sx={{ fontWeight: "md", color: "text.secondary" }}
                      >
                        {item.tag}
                      </Typography>
                    </CardOverflow>
                  </Card>
                  )
                })
              }
                
              </Typography>
            </AccordionDetails>
        </Accordion>
          
          
        
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Sheet
            size="lg"
            variant="outlined"
            sx={{
              maxWidth: 800,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
              }}
            />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Scrivi una recensione
            </Typography>
            <form onSubmit={(event) => {
              event.preventDefault();
            }}>
            <Typography component="legend">Valutazione:</Typography>
              <Rating
                name="simple-controlled"
                value={valutazione}
                onChange={(event, newValue) => {
                  setValutazione(newValue);
                }}
              />
              <Textarea sx={{
                marginBottom:1, 
                marginTop:1}} 
                minRows={2} 
                required
                />
              
              <Buttone type="submit">Invia la recensione</Buttone>


            </form>
            
          </Sheet>
        </Modal>
        </ColonnaDestra>
        

      </Grid>
      
    </Grid>
    <br/>
    <br/>
    <Footer />
    </Container1>
    }
   
    </>
  )
}

export default SingleProduct

/*
<form>
    
        <FormControl sx={{ 
          width: 240,
          }}
          name="tipo" >

          <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
            Tipo
          </FormLabel>
          <Select
            value={type}
            onChange={handleChangeType}
            sx={{marginBottom: 3}}
            
            componentsProps={{
              button: {
                id: 'select-field-demo-button',
                'aria-labelledby': 'select-field-demo-label select-field-demo-button',
              },
              listbox:{
                sx:{
                  backgroundColor: 'white'
                }
              }
            }}
          >
            { 
              
              varianti.map((tmp)=>{
                
                i++
                console.log(i)
                return(
                  <Option value={i}>{tmp.id}</Option> 
                )
              })
            }
          </Select>
          </FormControl>
          <FormControl sx={{ 
          width: 240,
          marginBottom: 5
          }} 
          name="quantita">

          <FormLabel id="select-quantita-label" htmlFor="select-quantità">
            Quantità
          </FormLabel>
          <Select
            sx={{marginBottom: 3}}
            value={quantity}
            onChange={handleChangeQuantity}
            componentsProps={{
              button: {
                id: 'select-quantità',
                'aria-labelledby': 'select-field-demo-label select-field-demo-button',
              },
              listbox:{
                sx:{
                  backgroundColor: 'white'
                }
              }
            }}
          >
           
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
          
          <Buttone >Add to Cart</Buttone>
        </FormControl>
        </form>
*/