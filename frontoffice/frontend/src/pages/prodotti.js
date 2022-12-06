import {Grid, Box, Link } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Stack } from 'react-bootstrap'
import styled, { useTheme } from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { popularProducts } from '../components/StorePage/data'
import FiltriProdotti from '../components/StorePage/filtri_chiavica'
import Products from '../components/StorePage/PopProducts'

const Container1= styled.div`
  margin-top: 80px;
  margin-left: 2em;
  margin-right: 2em;
`


const Prodotti = () => {

  const theme = useTheme();
  const [animalName, setAnimalName] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  const toggle = ()=> {
      setIsOpen(!isOpen)
  }

  useEffect(() => {
    axios.post('http://localhost:4000/api/item/')
    .then(res=> {
     console.log(res)
     setData(res.data)
     setLoading(false)
    })
    .catch(err => {
     console.log (err)
    })
    console.log(data)
   }, []);

  

  return (
    <div>
      <Navbar />
      {loading ?
      ''
      : 
      <div>

        <Container1>
          
            
        <FiltriProdotti />
        <Products data={data}/>
            
        
        </Container1>
        <Footer />  
      </div>
      }
      
      
    </div>
  )
}

export default Prodotti