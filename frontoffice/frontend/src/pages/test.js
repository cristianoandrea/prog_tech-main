//test per render
import { useState,useEffect } from "react"
import * as React from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
//import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Card from '../components/card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Test = () => {
    const [check, setCheck] = useState(false)
    const [data, setData] = useState([])


    const handleSubmit = event => {
        event.preventDefault()
        setCheck(!check)
    }


    //fare fetch all api con i products, nella pagina dell api fare richiesta a db, epoi fare post con il json dei dati. decodificarlo e mostrare nella card
    
    
      
    useEffect(() => {
       axios.post('http://localhost:4000/api/item/')
       .then(res=> {
        console.log(res)
        setData(res.data)
       })
       .catch(err => {
        console.log (err)
       })
       console.log(data)
      }, []);
    

    return (
        <div  className="Sentiment">
            <Button onClick = {handleSubmit}> click me </Button>
            <Row xs={1} md={2} className="g-4">
            { check?

            
            data.data.map((datas,index)=>{
                return (
                
                    <Col>
                    <div className="container">
                    <div className="row">
                        <Card
                            title={datas.nome}
                            images={datas.image}
                            old_price="9,999"
                            newPrice={datas.prezzo}
                            dollar="$"
                            alt="batman"
                            exp_date={datas.descrizione}
                        />
                    </div>
                    </div>
                    </Col>
               
         )})
         
            
       : 
        ''
             
      }  
      </Row>        
      </div>
    );
  }
  
  export default Test