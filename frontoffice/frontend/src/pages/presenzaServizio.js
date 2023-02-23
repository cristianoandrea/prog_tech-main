import React, { useEffect, useState }  from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";
import FiltriServices from '../components/filtriServices';
import dayjs from 'dayjs';
import axios from 'axios'
import Products from '../components/StorePage/PopProducts';
import Footer from '../components/Footer'


export const ServicesH1= styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesContainer= styled.div`
margin-top: 80px;
margin-left: 2em;
margin-right: 2em;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


//uso uno stesso componente per dogsitting e veterinario:
//prendo in input un valore (service) che uso per renderizzare 
//il componente in maniera specifica
const PresenzaServizio = ({service, time}) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const type_visualization = service
  const [dataFiltrata, setDataFiltrata] = useState([])
  const [dataFiltrataFin, setDataFiltrataFin] = useState([])



  useEffect(() => {
    const tmp = {
      data: dataFiltrata
    }
    setDataFiltrataFin(tmp)

  }, [dataFiltrata]);
  

  useEffect(() => {
    console.log(type_visualization)
    axios.post('http://localhost:4000/api/service/visual/'+ type_visualization)
    .then(res=> {
     console.log(res)
     const tmp = {
      data: res.data
    }
     setData(tmp)
     setLoading(false)
    })
    .catch(err => {
     console.log (err)
    })
    console.log(data)
  
   }, []);

   function handleChangeFiltri(newValue) {
    setDataFiltrata(prevDataFiltrata => {
      return newValue;
    });
  }
  

  return (
    <div>
      <Navbar />

      {
        loading ?
        " "
        :
        <div>

      <ServicesContainer>
        
        
        <FiltriServices onSubmit={handleChangeFiltri}/>

        {dataFiltrata.length > 0?
       
       <Products data={dataFiltrataFin} tipo={true} />
       :
       <Products data={data} tipo={true}/>
      }

      </ServicesContainer>
      <Footer />  

      </div>
      }

    </div>
  )
}

export default PresenzaServizio