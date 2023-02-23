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
        path: "//v2.grommet.io/assets/Wilderpeople_Ricky.jpg",
        alt: 'Garfield',
        title: "porcodio non ne posso più....",
        description:"Un uomo va dal dottore... porcamadonna...",
        button: "Placa questo dolore "
      },
      {
        path: "//v2.grommet.io/assets/IMG_4245.jpg",
        alt: 'Leone',
        title: "Prodotti per cagnetti mongoloidi",
        description:"sfama il suo appetito con classe",
        button: "Placa questo dolore"
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
      <PopContainer>
      <PopH1>Top Selling Products:</PopH1>
      <Products data = {data} tipo= {false}/>
      </PopContainer>
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