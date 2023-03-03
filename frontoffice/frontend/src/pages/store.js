import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Categories from '../components/StorePage/Categories';
import Products from '../components/StorePage/PopProducts';
import Slider from '../components/StorePage/Slider';
import axios from 'axios'
import Services from '../components/Services';
import styled from "styled-components";

const slider={
  images: [
      {
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG87nXCQyLJmtoSR2otffGnyUcp2X3n5H-xQ&usqp=CAU",
        alt: 'Giocattoli',
        title: "Divertimento assicurato: Scopri la nostra vasta selezione di giocattoli per animali domestici!",
        description:"Dai palloni alle palle da tennis, abbiamo tutto per tenere i tuoi animali domestici felici e attivi!",
        button: "Giocattoli ",
        filtro: "accessori"
      },
      {
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhWN_ayg8ASNNLUU3ALLvlbmTW9w2lNQrbKXI6xFsWLbOm6EzGOLZb-BcEDFhhlKgjAs&usqp=CAU",
        alt: 'Cibo',
        title: "Nutrizione di alta qualità per i tuoi amati pelosi: Scopri la nostra vasta selezione di cibo per animali domestici!",
        description:"Alimenti di alta qualità per cani e gatti, per mantenere i tuoi amici pelosi sani e soddisfatti.",
        button: "Alimenti",
        filtro: "cibi"
      },
    ],
}

const elements={
  nome: "Croccantini",
  price: "12"
}

const PopContainer=styled.div`
    margin-top: 10em;
    margin-bottom: 10em;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    
`

const PopH1 = styled.h1`
font-size: 2.5rem;

margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`


const StorePage = () => {
  const[isOpen, setIsOpen] = useState(false);
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
      {loading? 

      ''
      :
      <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Slider testo={true} data={slider} />
      <Services />
      <Footer />
      
     
      </div>

      
  }
  </div>
  
  )
}

export default StorePage

/*
<Categories data = {data}/>
*/