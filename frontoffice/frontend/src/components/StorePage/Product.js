import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardContent from '@mui/joy/CardContent';
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import { Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import { formatCurrency } from "../../utilities/formatCurrency";
import Button from '@mui/material/Button';
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { useShoppingCart } from "../../context/shoppingCartContext";
import ModalDialog from "@mui/joy/ModalDialog";

import Textarea from "@mui/joy/Textarea";
import Sheet from "@mui/joy/Sheet";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;



const Product = ({ item, tipo }) => {
  //render true è servizio, altrimenti prodotto
  const [render, setRender] = useState();
  const [open, setOpen] = React.useState('');
  //se servicetype true allora è dositting
  const [serviceType, setServiceType] = useState()
  const {
    addServiceToCart,
    cartService
  } = useShoppingCart()

  function getQueryVariables() {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    const params = {};
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1]);
      if (typeof params[key] === 'undefined') {
        params[key] = value;
      } else if (Array.isArray(params[key])) {
        params[key].push(value);
      } else {
        params[key] = [params[key], value];
      }
    }
    return params;
  }

  useEffect(() => {
    console.log(item)
    console.log(item)
    setRender(tipo);
  }, [tipo]);

  useEffect(() => {
    if (item.tipo)
      setServiceType(true)
  }, [item])

  const RegisterVet = (_id, doc_id) => {
    const id = _id
    //const struct_name = name
    const param = getQueryVariables()
    console.log(param)
    fetch("http://localhost:4000/api/service/addVetReservation", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ param, id, doc_id }),
    })
  }

  const RegisterSitter = (_id, doc_id, nome, prezzo) => {
    //const struct_name = name
    const param = getQueryVariables()
    const service = {
      servizio_id: _id,
      dottore_id: doc_id,
      start_date: param.date,
      end_date: param.endDate,
      grandi: param.grandi,
      medi: param.medi,
      piccoli: param.piccoli,
      dottore: nome,
      prezzo: prezzo
    }

    addServiceToCart(service)
    window.location.href = "http://localhost:3000/checkoutService";

  }

  if (render === undefined) {
    return null; // or a loading spinner, or some other placeholder content
  }

  return (
    <Card variant="outlined" sx={{ width: 320, marginBottom: 0.1 }}>
      <CardOverflow>
        <AspectRatio ratio="1">
          {render ? (
            <img src={item.nome_struttura.img} loading="lazy" alt="" />
          ) : (
            <img src={item.image.path} loading="lazy" alt="" />
          )}
        </AspectRatio>

      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
        {render ? item.nome_struttura.nome
          :
          <Link href={`/store/prodotti/${item._id}`} overlay underline="none">
            {item.nome}
          </Link>
        }

      </Typography>

      {render ? (
        ""
      ) : (
        <div>
          <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
            {formatCurrency(item.prezzo)}
          </Typography>
        </div>
      )}

      <Divider inset="context" />
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          Tags:
        </Typography>
        <Divider orientation="vertical" />
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          {render ? item.tipo : item.tag}
        </Typography>
      </CardOverflow>
      {render ? (
        <div>
          <Button
            variant="contained"
            color="primary"
            sx={{
              typography:{
                fontFamily: 'Encode Sans Expanded',
              }
            }}
            style={{ backgroundColor: '#000000', marginTop: '16px',borderRadius: '25px' }}
            onClick={() => setOpen("solid")}
          >
            Clicca per vedere i servizi che offriamo!
          </Button>
          <Modal
            open={!!open} onClose={() => setOpen('')}>
            <ModalDialog
              aria-labelledby="variant-modal-title"
              aria-describedby="variant-modal-description"
              variant={open || undefined}
              style={{ border: '2px solid black', padding: '24px' }}
            >
              {item.dottore.map((elem) => (
                <Card key={elem._id} style={{ marginBottom: '16px' }}>
                  <CardContent style={{ padding: '16px' }}>
                    <Typography id={elem._id} component="h2" level="inherit" style={{ marginBottom: '8px' }}>
                      dottor {elem.nome}
                    </Typography>

                    {serviceType ?
                      <Typography id={elem._id} textColor="inherit" style={{ marginBottom: '8px' }}>
                        Il prezzo per il servizio è {elem.prezzo} € a notte.
                      </Typography>
                      :
                      <Typography id={elem._id} textColor="inherit" style={{ marginBottom: '8px' }}>
                        Il prezzo per il servizio è {elem.prezzo} €.
                      </Typography>
                    }

                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        typography:{
                          fontFamily: 'Encode Sans Expanded',
                        }
                      }}
                      style={{ backgroundColor: '#000000', marginTop: '16px' , borderRadius: '25px'}}
                      onClick={() => RegisterSitter(item._id, elem._id, elem.nome, elem.prezzo)}
                    >
                      Prenota!
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </ModalDialog>
          </Modal>
        </div>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Product;
