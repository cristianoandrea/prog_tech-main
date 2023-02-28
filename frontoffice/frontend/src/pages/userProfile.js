import { useState,useEffect } from "react"
import * as React from 'react';
import axios from 'axios';
import { useLogout } from "../hooks/useLogout";
import {Row, Col, Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import { Box, Grid } from "@mui/material";
import { Button1 } from "../components/ButtonElement";

import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import SearchRounded from '@mui/icons-material/SearchRounded';
import CartItem from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { AspectRatio, Card } from "@mui/joy";

let profilo={
  nome: 'Andrea',
  cognome: "Cristiano",
  nascita: "28/2/2000",
  sesso: "M",
  animali_preferiti:[
    'Elefante', 'struzzo'
  ],
  mail:"cristianoandrea00@gmail.com",
  password: "ForzaNapoli",
  acquisti:[
    {
      id:4,
      name:"Maglia Napoli",
      prezzo: "125",
      quantity: 2,
      img:"",
      alt:"",
      tag:"accessori",
      animale:"gatto",
      data_acquisto: "12/01/2023"
    },
    {
      id:4,
      name:"Purina cibo cane",
      prezzo: "15",
      quantity: 2,
      img:"",
      tag:"cibo",
      animale:"cane",
      data_acquisto: "12/01/2023"
    }
  ],
  prenotazioni:[
    {
      servizio: "Dogsitting",
      data_inizio:"12/03/2023",
      data_fine:"15/03/2023",
      nome_struttura:"Villa Spada",
      qualita_servizio:"vip",
      spesa_totale: 250,
      citta: "Bologna"
    },
    {
      servizio: "Toelettatura",
      data_inizio:"19/03/2023",
      data_fine:"",
      nome_struttura:"Villa Floridiana",
      qualita_servizio:"vip",
      spesa_totale: 250,
      citta: "Napoli"
    }
  ]
}

const CardAcquisto = ({item}) =>{

  const link="item/prodotti/" + item.id

  return(
    <Card
    variant="outlined"
    orientation="horizontal"
    sx={{
      width: 320,
      gap: 2,
      '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
    }}
  >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
      <img
        src="item.img"
        srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
        loading="lazy"
        alt="item.alt"
      />
      </AspectRatio>
    <div>
      <a href={link} >

        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {item.name}
        </Typography>
      </a>
      <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        {formatCurrency(item.prezzo)} , x {item.quantity}
      </Typography>
      <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        Data di Acquisto:{item.data_acquisto}
      </Typography>
      <Chip
        variant="outlined"
        color="primary"
        size="sm"
        sx={{ pointerEvents: 'none' }}
      >
        Animali: {item.animali}
      </Chip>
      <Chip
        variant="outlined"
        color="primary"
        size="sm"
        sx={{ pointerEvents: 'none' }}
      >
        Tag: {item.tag}
      </Chip>

    </div>
  </Card>
  )
}

const CardServizio = ({item}) =>{

  const link="item/prodotti/" + item.id

  let lungo=true
  if (item.data_fine=="") lungo=false

  return(
    <Card
    variant="outlined"
    orientation="horizontal"
    sx={{
      width: 320,
      gap: 2,
      '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
    }}
  >
      
    <div>
      <a href={link} >

        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {item.nome_struttura} ,  {item.citta}
        </Typography>
      </a>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        Tipologia di servizio:  {item.servizio}
      </Typography>
      <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        Data : {
          lungo ?
          <>{item.data_inizio} - {item.data_fine}</>
          :
          <>
          {item.data_inizio} 
          </>
        }
      </Typography>
      <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        Dottore/modalità servizio:  {item.qualita_servizio}
      </Typography>
      <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
        Spesa: {formatCurrency(item.spesa_totale)} 
      </Typography>
      

    </div>
  </Card>
  )
}


const UserProfile = () => {

  /*
  const dispatch = useDispatch();
  const {logout} = useLogout();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler= (e) => {
    e.preventDeafault()

    //if(password === confirmPassword)
     // dispatch(updateProfile({name,email,password}))
  }

  */
    const handleClick =()=>{
      //logout()
    }
    const [index, setIndex] = useState(0);

   return(
    <div>
    <Navbar />
    <Box sx={{
      margin:"40px",
      marginTop:'85px',
      }}>

    <Box
      sx={{
        marginTop:'85px',
        bgcolor: 'background.body',
        flexGrow: 1,
        m: -3,
        borderRadius: 'md',
        
      }}
      >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{ 
          '--Tabs-gap': '5px',
          marginTop: 3,
          
         }}
      >
        <TabList
          variant="plain"
          sx={{
            width: '100%',
            display: 'flex',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            maxWidth: 800,
            mx: 'auto',
            pt: 2,
            alignSelf: 'flex-start',
            [`& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                fontWeight: 'lg',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '-1px',
                  left: 'var(--List-item-paddingLeft)',
                  right: 'var(--List-item-paddingRight)',
                  height: '3px',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab sx={{fontSize:20}}>
            Dati Utente
          </Tab>
          <Tab sx={{fontSize:20}}>
            Acquisti
          </Tab>
          <Tab sx={{fontSize:20}}>
            Prenotazioni
          </Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level3,
            height: '1px',
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        />
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            px: 4,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              <h3>I Miei dati:</h3>
              <ul>
                <li><strong>Nome: </strong>{profilo.nome}</li>
                <li><strong>Cognome: </strong>{profilo.cognome}</li>
                <li><strong>Data di nascita: </strong>{profilo.nascita}</li>
                <li><strong>Sesso: </strong>{profilo.sesso}</li>
                <li>
                  <strong>Animali preferiti:</strong>
                  <ul>
                    {profilo.animali_preferiti.map(animal => <li key={animal}>{animal}</li>)}
                  </ul>
                </li>
                <li><strong>Email: </strong>{profilo.mail}</li>
                <li><strong>Password: </strong>{profilo.password}</li>
              </ul>

            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            
              <h3>I miei acquisti:</h3>
              <Box sx={{ display: 'flex', flexDirection: {md:'row', sx:'column'}, alignItems: 'center', gap: '16px' }}>

              {
                profilo.acquisti.map((acquisto)=>{
                  return(
                    <CardAcquisto item={acquisto}  />
                  )
                })
              }
              </Box>
            
          </TabPanel>
          <TabPanel value={2}>

            <h3>Le mie prenotazioni:</h3>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>

            {
              profilo.prenotazioni.map((service)=>{
                return(
                  <CardServizio item={service}  />
                )
              })
            }
            </Box>
          </TabPanel>
        </Box>
      </Tabs>
    </Box>

      
    </Box>
     
    
    </div>
    )
  }
  
  export default UserProfile

  /*
<Button1 onClick={handleClick}>Log out</Button1>

   <Row className= 'profileContainer'>
         <Col md={6}>
         <Form onSubmit={submitHandler}>
           <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
               type= "text"
               placeholder="Enter Name"
               value= {name}
               onChange= {(e)=>setName(e.target.value)}>
               </Form.Control>
               </Form.Group>
               <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
               type= "email"
               placeholder="Enter Email"
               value= {email}
               onChange= {(e)=>setEmail(e.target.value)}>
               </Form.Control>
               </Form.Group>
               <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
               type= "password"
               placeholder="Enter Password"
               value= {password}
               onChange= {(e)=>setPassword(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Form.Group controlId="Confirm password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
               type= "password"
               placeholder="Confirm Password"
               value= {confirmPassword}
               onChange= {(e)=>setConfirmPassword(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Button type="submit" varient="primary">
            Update
           </Button>
         </Form>
         </Col>
         
      </Row>
  */