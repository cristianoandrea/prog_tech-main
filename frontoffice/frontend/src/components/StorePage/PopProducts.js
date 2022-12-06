import { Grid } from "@mui/material";
import styled from "styled-components";

import Product from "./Product";

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

const Contenitore = styled.div `
margin: 10px;

`

const Products = ({data}) => {

  
  return (
    <>
    <Container >
      {data.data.map((item) => (
        <Contenitore>
        <Product item={item} />
        <br/>
        </Contenitore>

      ))}
    </Container>
    </>

  );
};

export default Products;