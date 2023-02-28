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
import { useAuthContext } from "../hooks/useAuthContext";

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
      tag:"accessori",
      animale:"gatto",
      data_acquisto: "12/01/2023"
    },
    {
      id:4,
      name:"Purina cibo cane",
      prezzo: "15",
      quantita: 2,
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
    }
  ]
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

    const {user} = useAuthContext()

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
          marginTop: 2,
          
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
                <li><strong>Nome: </strong>{user.name}</li>
                <li><strong>Cognome: </strong>{user.cognome}</li>
                <li><strong>Data di nascita: </strong>{user.dataNascita}</li>
                <li><strong>Sesso: </strong>{user.sesso}</li>
                <li>
                  <strong>Animali preferiti:</strong>
                  <ul>
                    {profilo.animali_preferiti.map(animal => <li key={animal}>{animal}</li>)}
                  </ul>
                </li>
                <li><strong>Email: </strong>{user.email}</li>
                <li><strong>Password: </strong>{user.token}</li>
              </ul>

            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              <h3>I miei acquisti:</h3>
              {
                profilo.acquisti.map((acquisto)=>{
                  <CartItem key={acquisto.id} {...acquisto} />
                })
              }
            </Typography>
          </TabPanel>
          <TabPanel value={2}>
            
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