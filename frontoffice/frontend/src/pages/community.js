import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from '@mui/joy/Card';
import styled from "styled-components";
import CommunityCard from "../components/communityCard";
import Sidebar from "../components/Sidebar";
import { Typography } from "@mui/joy";
import { Box } from "@mui/material";


const Contenitore = styled.div`
  margin: 100px;
  margin-left: 2em;
  margin-right: 2em;
`;
const Container = styled.div` 
  padding: 10px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;


export function CardBacheca({dato}) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
       <strong>Nome:</strong>  {dato.nome}
      </Typography>
      <Typography level="body2"> <strong>Padrone:</strong> {dato.username}</Typography>
      <Typography level="body2"> <strong>Specie:</strong> {dato.specie}</Typography>
      <Typography level="body2"> <strong>Sesso:</strong> {dato.sesso} - <strong>Età:</strong> {dato.eta}</Typography>
      <Typography level="body1">
      <strong>Descrizione:</strong> {dato.descrizione}
      </Typography>
      <Typography level="body1">
        <strong>Situazione medica:</strong> {dato.descrizione}
      </Typography>
     
    </Card>
  );
}

const dato={
  username: 'Andrea',
  specie:'cane',
  nome: 'Diocane',
  sesso:'maschio',
  eta: '22',
  descrizione:'non perdo manco tempo a descriverlo... mediocre',
  desc_medica:'tutto ok'
}

const CommunityPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/note/")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);

  const[isOpen, setIsOpen] = useState(false)
 
    const toggle = ()=> {
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      
          <Typography level="h1">Bacheca Eccolo Qua!</Typography>
          <Typography level="body1">Qui troverai descrizio di spleididi cuccioli da parte dei loro fieri padroni</Typography>
        <div>
          <Container>
              <Contenitore>
                <CardBacheca dato={dato}></CardBacheca>
              </Contenitore>
            
          </Container>
        </div>
        <Typography level="h2">Quiz Top Players:</Typography>

        <Footer></Footer>
    </div>
  );
};

export default CommunityPage;
