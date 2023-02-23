import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";

const names = ["Cane", "Gatto", "Orso", "Topo", "Diocane"];

const numbers = [0, 1, 2, 3, 4];
const tipi = ["Toilettatura", "Dogsitting", "Veterinario"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Button1 = styled.button`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background: #fff;
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const FiltriServices = (props, { time }) => {
  const [quantity, setQuantity] = useState("");
  const [animal, setAnimals] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(), 1);
  const [tipo, setTipo] = useState("");

  const handleServizioChange = (event) => {
    setTipo(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAnimalsChange = (event) => {
    setAnimals(event.target.value);
  };
  const [filtri, setFiltri] = React.useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(tipo, quantity, animal, startDate);
    const response = await fetch("http://localhost:4000/api/service/filter2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tipo, quantity, animal, startDate }),
    });
    const data = await response.json();
    console.log(data);
    setFiltri(data);

    const originalDate = new Date(startDate);

    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const day = originalDate.getDate().toString().padStart(2, "0");

    const isoDateString = `${year}-${month}-${day}T00:00:00.000+00:00`;
    const newParams = {
      tipo: tipo,
      quantity: quantity,
      animal: animal,
      date: isoDateString,
    };

    const currentSearchParams = new URLSearchParams(window.location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      currentSearchParams.set(key, value);
    });

    const newUrl = `${window.location.origin}${
      window.location.pathname
    }?${currentSearchParams.toString()}`;

    window.history.replaceState({}, "", newUrl);
    props.onSubmit(data);
  };

  return (
    <FilterContainer>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 8 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ margin: 10 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <FormControl
              sx={{
                m: 1,
                width: 300,
                minWidth: 250,
                height: 70,
              }}
              justifyContent="center"
              alignItems="center"
            >
              <InputLabel
                sx={{
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
                id="tipo_animale"
              >
                Animale
              </InputLabel>
              <Select
                name="animale"
                labelId="demo-select-small"
                id="tipo_animale"
                // multiple
                value={animal}
                label="Animale"
                onChange={handleAnimalsChange}
                input={<OutlinedInput id="tipo_animale" label="Tipo Animale" />}
                sx={{
                  height: 60,
                  menuStyle: {
                    borderRadius: 5,
                  },
                  ".MuiList-root-MuiMenu-list": {
                    borderRadius: 3,
                  },
                  minWidth: 300,
                  borderRadius: 3,
                  borderColor: "text.primary",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  listbox: {
                    borderRadius: 3,
                  },
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
              >
                {names.map((name) => (
                  <MenuItem
                    value={name}
                    key={name}
                    sx={{
                      borderRadius: 3,
                      typography: {
                        fontFamily: "Encode Sans Expanded",
                      },
                    }}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl size="small">
              <InputLabel
                sx={{
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
                id="demo-select-small"
              >
                tipo Servizio
              </InputLabel>
              <Select
                name="tipo"
                labelId="demo-select-small"
                id="demo-select-small"
                value={tipo}
                label="tipo Servizio"
                onChange={handleServizioChange}
                sx={{
                  height: 60,
                  menuStyle: {
                    borderRadius: 5,
                  },
                  ".MuiList-root-MuiMenu-list": {
                    borderRadius: 3,
                  },
                  minWidth: 300,
                  borderRadius: 3,
                  borderColor: "text.primary",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  listbox: {
                    borderRadius: 3,
                  },
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
              >
                {tipi.map((servizio) => {
                  return (
                    <MenuItem
                      value={servizio}
                      key={servizio}
                      sx={{
                        borderRadius: 3,
                        typography: {
                          fontFamily: "Encode Sans Expanded",
                        },
                      }}
                    >
                      {servizio}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl size="small">
              <InputLabel
                sx={{
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
                id="demo-select-small"
              >
                Quantità
              </InputLabel>
              <Select
                name="quantity"
                labelId="demo-select-small"
                id="demo-select-small"
                value={quantity}
                label="Order"
                onChange={handleQuantityChange}
                sx={{
                  height: 60,
                  menuStyle: {
                    borderRadius: 5,
                  },
                  ".MuiList-root-MuiMenu-list": {
                    borderRadius: 3,
                  },
                  minWidth: 300,
                  borderRadius: 3,
                  borderColor: "text.primary",
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  listbox: {
                    borderRadius: 3,
                  },
                  typography: {
                    fontFamily: "Encode Sans Expanded",
                  },
                }}
              >
                {numbers.map((num) => {
                  return (
                    <MenuItem
                      value={num}
                      key={num}
                      sx={{
                        borderRadius: 3,
                        typography: {
                          fontFamily: "Encode Sans Expanded",
                        },
                      }}
                    >
                      {num}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {time ? (
              <>
                <DatePicker
                  name="data"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  timeFormat="HH:mm"
                  dateFormat="dd/MM/yyyy HH:mm"
                  showTimeSelect
                  minDate={new Date()}
                  customInput={
                    <Input
                      style={{
                        width: "300px",
                        height: "60px",
                        borderRadius: "10px",
                        borderStyle: " solid",
                        borderWidth: "thin",
                        borderColor: "black",
                        backgroundColor: "white",
                        fontFamily: "Encode Sans Expanded",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </>
            ) : (
              <div>
                <DatePicker
                  name="from"
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  customInput={
                    <Input
                      style={{
                        width: "620px",
                        height: "60px",
                        borderRadius: "10px",
                        borderStyle: " solid",
                        borderWidth: "thin",
                        borderColor: "black",
                        backgroundColor: "white",
                        fontFamily: "Encode Sans Expanded",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
                <DatePicker
                  name="to"
                  dateFormat="dd/MM/yyyy"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  customInput={
                    <Input
                      style={{
                        width: "620px",
                        height: "60px",
                        borderRadius: "10px",
                        borderStyle: " solid",
                        borderWidth: "thin",
                        borderColor: "black",
                        backgroundColor: "white",
                        fontFamily: "Encode Sans Expanded",
                        marginBottom: "10px",
                      }}
                    />
                  }
                />
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button1 type="submit">Cerca</Button1>
          </Grid>
        </Grid>
      </form>
    </FilterContainer>
  );
};
export default FiltriServices;

//se time è true => veterinairo
//time = falso => dogsitter e daterange
/*
unica variabile in input è lì per dirmi se è dogsitting o 
servizio giornaliero tipo veterinario. L'inica differenza diventa
quindi la presenza della data di fine trattamento nei filtri.
Per il resto ho bisogno di Animale e numero, e data di inizio
*/
