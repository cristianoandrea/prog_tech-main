import { Accordion, AccordionDetails, AccordionSummary,  Grid, InputLabel, MenuItem, Paper, Rating, Select } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
//import Select from '@mui/joy/Select';
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

const data={
  producer: "SSC Napoli",
  name: "Maglia Home 2022/2023",
  description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra, erat accumsan auctor fringilla, enim ipsum aliquet lectus, eu finibus turpis enim eu mauris. ",
  rating: 3.5,
  images: [
    {
      path:  "//v2.grommet.io/assets/Wilderpeople_Ricky.jpg",
      alt: 'Garfield'
    },
    {
      path: "//v2.grommet.io/assets/IMG_4245.jpg",
      alt: 'Leone'
    },
  ],
  prezzo: "125$",
  varianti:[
    {
      id: "0",
      value:"azzurro",
      etichetta:"Azzurro",
      disponibilità: 4
    },
    {
      id: '1',
      value:"bianco",
      etichetta:"Bianco",
      disponibilità: 6
    },
    {
      id: '2',
      value:"grigio",
      etichetta:"Grigio",
      disponibilità: 8
    }
  ],
  recensioni: [
    {
      nome: "Lellosan",
      rating: 1.5,
      testo: "terrificante, disgustoso non acquistate"
    },
    {
      nome: "Libanese",
      rating: 4.5,
      testo: "Un devasto senza fine"
    }
  ]
}

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
  //la valutazione media del prodotto
  const [valutazione, setValutazione] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  //indica la quantità che si desidera acquistare
  const [quantity, setQuantity] = React.useState('');
  //selected è la variabile che indica quale variante del
  //prodotto stiamo scegliendo (esempio il colore)
  //e di conseguenza cambia il numero di elementi riguardanti la
  //quantità acquistabile
  var varianti= data.varianti
  const [type, setType] = React.useState(varianti[0].id);

  const handleChangeQuantity = (event) => {
    console.log(event)
    setQuantity(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  
  var i=0;
  
  var recensioni=data.recensioni
 
  return (
    <>
    <Navbar/>
    <Container1>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
       <Slider testo={false} data={data}/>
      </Grid>
      <Grid item xs={12} md={7}>
        <ColonnaDestra>
        <h2>{data.producer}</h2>
        <h1>{data.name}</h1>
        <h5>{data.prezzo}</h5>
        <label for="read-only">Recensioni:</label>
        <Rating name="read-only" value={data.rating} readOnly />
        <p>{data.description}</p>
        
        <br/>
        
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
          <Select
          sx={{
            borderRadius:3,
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'black',
           
            },
            listbox:{
              borderRadius:3,
            },
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }
          }}
          
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={'0'}
            label="Type"
            onChange={handleChangeType}
            placeholder={"scegli un tipo"}
          >
            
            {
              varianti.map((tmp)=>{
                return(
                  <MenuItem
                  
                   value={tmp.id}
                   sx={{
                    borderRadius:1,
                    borderColor: 'text.primary',
                    typography:{
                      fontFamily: 'Encode Sans Expanded',
                    }
                  }}>{tmp.etichetta}</MenuItem>
                )
              })
            }
            
          </Select>

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
          <Buttone>Add to cart</Buttone>

        </FormControl>
        

        </form>
        
        
        <Accordion sx={{

        }}>
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
              recensioni.map((recensione)=>{
                return(
                <Recensione data={recensione} />
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
            Qui idealmente si fa una chiamata per cercare prodotti con stesso tag
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