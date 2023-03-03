import React from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { objDogSitter, objVeterinario, objToilettatura } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Slider from '../components/StorePage/Slider'
import styled from 'styled-components'
import axios from 'axios'
import { useState ,useEffect } from 'react'


const Container1= styled.div`
  margin-top: 80px;
  margin-left: 2em;
  margin-right: 2em; 

`

 
const PresenzaPage = () => {
  

  return (

    <div> 
      <Navbar />
      
      <InfoSection {...objVeterinario} />
      <InfoSection {...objDogSitter} />
      <InfoSection {...objToilettatura} />

      <Footer />
    </div>
  )
}

export default PresenzaPage