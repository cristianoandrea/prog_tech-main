import React, { useState } from 'react'
import styled from "styled-components";
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import { Box, Chip, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, useTheme } from '@mui/material';
import "react-datepicker/dist/react-datepicker.css";
/*unica variabile in input è lì per dirmi se è dogsitting o 
servizio giornaliero tipo veterinario. L'inica differenza diventa
quindi la presenza della data di fine trattamento nei filtri.
Per il resto ho bisogno di Animale e numero, e data di inizio
*/

const names = [
  'Cane', 'Gatto', 'Orso', 'Topo', 'Diocane'
];

const numbers=[
  0,1,2,3,4
]

const Button1= styled.button`
margin-top:10px;
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        background: #fff;
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

//se time è true => veterinairo
//time = falso => dogsitter e daterange


const FiltriServices = ({time}) => {
  
  const [quantity, setQuantity] = useState('');

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const [animal, setAnimal]= useState('')

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const [startDate, setStartDate]=useState(new Date())
  const [endDate, setEndDate] = useState(new Date(), 1);


  return (
    <FilterContainer>
    
      <form method="GET" action="/presenza/veterinario">

      <FormControl sx={{ m: 1, width: 300, height: 70 }} size="small">
            <InputLabel
            sx={{
                typography:{
                  fontFamily: 'Encode Sans Expanded',
                }
              }}
            id="demo-select-small">Animale</InputLabel>
            <Select
                name="animale"
                labelId="demo-select-small"
                id="demo-select-small"
                value={animal}
                label="Animale"
                onChange={handleAnimalChange}
                sx={{
                    height: 60,
                    menuStyle:{
                      borderRadius:5,
                    },
                    '.MuiList-root-MuiMenu-list' :{
                      borderRadius:3,
                    },
                    minWidth: 200,
                    borderRadius:3,
                    borderColor: 'text.primary',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'black',
                    },
                    listbox:{
                      borderRadius:3,
                    },
                    typography:{
                      fontFamily: 'Encode Sans Expanded',
                    }
                  }}
            >
              {
                names.map((name)=>{
                  return(

                  <MenuItem
                  value={name}
                  key={name}
                  sx={{
                    borderRadius:3,
                    typography:{
                      fontFamily: 'Encode Sans Expanded',
                    },
                  }}
                  >
                  {name}
                  </MenuItem>
                  )
                })
              }
                
            </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 300, height: 70 }} size="small">
            <InputLabel
            sx={{
                typography:{
                  fontFamily: 'Encode Sans Expanded',
                }
              }}
            id="demo-select-small">Quantità</InputLabel>
            <Select
                name="quantity"
                labelId="demo-select-small"
                id="demo-select-small"
                value={quantity}
                label="Order"
                onChange={handleQuantityChange}
                sx={{
                    height: 60,
                    menuStyle:{
                      borderRadius:5,
                    },
                    '.MuiList-root-MuiMenu-list' :{
                      borderRadius:3,
                    },
                    minWidth: 200,
                    borderRadius:3,
                    borderColor: 'text.primary',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'black',
                    },
                    listbox:{
                      borderRadius:3,
                    },
                    typography:{
                      fontFamily: 'Encode Sans Expanded',
                    }
                  }}
            >
                {
                  numbers.map((num)=>{
                    return(
                      <MenuItem
                  value={num}
                  key={num}
                  sx={{
                    borderRadius:3,
                    typography:{
                      fontFamily: 'Encode Sans Expanded',
                    },
                  }}
                  >
                  {num}
                  </MenuItem>
                    )
                  })
                }
            </Select>
      </FormControl>
      
      {
        time ?
        <>
        
        <DatePicker 
        name="data"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy HH:mm"
        showTimeSelect
        minDate={new Date()}
        customInput={(
          <Input
              style={{ 
                width:'300px',
                height:"60px", 
                borderRadius: "10px",
                borderStyle:' solid', 
                borderWidth:'thin',
                borderColor:'black', 
                backgroundColor:"white",
                fontFamily: 'Encode Sans Expanded',
                marginBottom: "10px"
              }}
          />
          )}
        />
        <br/><br/><br/><br/>
        <p>time è vero</p>
        </>
        
        :
        <div>
          
          <DatePicker
          name="from"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={(
            <Input
                style={{ 
                  width:'620px',
                  height:"60px", 
                  borderRadius: "10px",
                  borderStyle:' solid', 
                  borderWidth:'thin',
                  borderColor:'black', 
                  backgroundColor:"white",
                  fontFamily: 'Encode Sans Expanded',
                  marginBottom: "10px"
                }}
            />
            )}
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
            customInput={(
              <Input
                  style={{ 
                    width:'620px',
                    height:"60px", 
                    borderRadius: "10px",
                    borderStyle:' solid', 
                    borderWidth:'thin',
                    borderColor:'black', 
                    backgroundColor:"white",
                    fontFamily: 'Encode Sans Expanded',
                    marginBottom: "10px"
                  }}
              />
              )}
          />

<br/><br/><br/><br/>
        <p>time è falso</p>
        </div>

      }
      

      

      <Button1 type="submit">Cerca</Button1>
      </form>
    </FilterContainer>
  )
  
}

export default FiltriServices

/*

<DatePicker
      name='data'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      />


<input type="date" name="party" min="2022-11-21" max="2024-04-30" />
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
        name={name}
        control={control}
        render={() => (
          <DatePicker
          
          disablePast
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
          />
        )}
      />
      </LocalizationProvider>
*/