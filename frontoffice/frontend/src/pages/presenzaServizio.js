import React, { useEffect, useState }  from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import FiltriServices from '../components/filtriServices';
import dayjs from 'dayjs';
import axios from 'axios'
import Products from '../components/StorePage/PopProducts';

export const ServicesH1= styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesContainer= styled.div`
margin-top:150px;
width: 100%
    height: 800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    flex-wrap: wrap;

`
//uso uno stesso componente per dogsitting e veterinario:
//prendo in input un valore (service) che uso per renderizzare 
//il componente in maniera specifica
const PresenzaServizio = ({service, time}) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  var pippo={time}

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

  var servizio= ""
  if (service == 0) {

    servizio="Veterinario";

  } else if (service==1){
    servizio="Dogsitting"
    
  }

  

  return (
    <div>
      <Navbar />

      {
        loading ?
        
        
        <ServicesContainer></ServicesContainer>
        :

      <ServicesContainer>
        <ServicesH1>{servizio}</ServicesH1>
        
        <FiltriServices time={pippo}/>

        <Products data = {data}/>

      </ServicesContainer>
      }

    </div>
  )
}

export default PresenzaServizio