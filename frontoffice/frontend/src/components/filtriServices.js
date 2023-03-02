import React, { useState } from 'react';
import { Grid, FormControl,Input, InputLabel, Select, MenuItem } from '@mui/material';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Button from '@mui/joy/Button';



const Button1= styled.button`

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

const Button2= styled.button`

    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 5px 12px;
    color: #010606;
    font-size: 10px;
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
justify-content: center;

`;






const animalucci=[
  { value: 'cane', label: 'Cani' },
  { value: 'gatto', label: 'Gatti' },
  { value: 'drago', label: 'Draghi di Komodo' },
  { value: 'pesce', label: 'Pesci' },
]

const cities=[
  'Bologna', 'Roma', 'Bari', 'Napoli', 'Milano', 'Foligno', 'Matera',"Firenze",'Torino',"Venezia"
]

//se time è true => veterinairo
//time = falso => dogsitter e daterange
const FiltriServices = ( {time,onPass} ) => {
  const [city, setCity] = useState("");
  const [animal, setAnimals] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(), 1);
  const [tipo, setTipo] = useState("");
  const [animalQuantity, setAnimalQuantity] = useState(0);
  const [animaliPiccoli, setPiccoli]= useState(0)
  const [animaliMedi, setMedi]= useState(0)
  const [animaliGrandi, setGrandi]= useState(0)

  const handleServizioChange = (event) => {
    setTipo(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  //qui vengono salvati tutti gli animali con le relative quantità
  const [pets, setPets] = useState(
    [
      {
        name: "Cane", key: "medio", quantity: 0
      },
      {
        name: "Gatto", key: "medio", quantity: 0
      },
      {
        name: "Pesce", key: "piccolo", quantity: 0
      },
      {
        name: "Tigre", key: "grande", quantity: 0
      },
    ]
    )
    
  const [selectedPets, setSelectedPets] = useState(pets);
  const handleQuantityChange = (event, index) => {
    const newSelectedPets = [...selectedPets];
    newSelectedPets[index].quantity = event.target.value;
    setSelectedPets(newSelectedPets);
  };


  const handleSubmit = async (event) => {
    let data={}
    event.preventDefault();
    if(time){
    console.log(city,startDate);
    const response = await fetch("http://localhost:4000/api/service/filter/veterinario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({city, startDate}),
    });
    data = await response.json(); 
    console.log(data);
    const originalDate = new Date(startDate);

    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const day = originalDate.getDate().toString().padStart(2, "0");
    const hours =  originalDate.getHours().toString().padStart(2, "0");
    const minutes =  originalDate.getMinutes().toString().padStart(2, "0");

    const isoDateString = `${year}-${month}-${day}-${hours}-${minutes}:00.000+00:00`;
    const newParams = {
      tipo: tipo,
      city: city,
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
  }
  else{
    console.log(city,startDate,endDate,animaliPiccoli,animaliMedi,animaliGrandi)
    const response = await fetch("http://localhost:4000/api/service/filter/dogsitter",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({city, startDate,endDate,animaliPiccoli,animaliMedi,animaliGrandi}),
    })
    data = await response.json()
    console.log(data)

    const originalDate = new Date(startDate);
    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const day = originalDate.getDate().toString().padStart(2, "0");
    const hours =  originalDate.getHours().toString().padStart(2, "0");
    const minutes =  originalDate.getMinutes().toString().padStart(2, "0");
    const isoDateString = `${year}-${month}-${day}-${hours}-${minutes}:00.000+00:00`;
    const originalEndDate = new Date(endDate);
    const year1 = originalEndDate.getFullYear();
    const month1 = (originalEndDate.getMonth() + 1).toString().padStart(2, "0");
    const day1 = originalEndDate.getDate().toString().padStart(2, "0");
    const hours1 =  originalEndDate.getHours().toString().padStart(2, "0");
    const minutes1 =  originalEndDate.getMinutes().toString().padStart(2, "0");
    const isoDateString1 = `${year1}-${month1}-${day1}-${hours1}-${minutes1}:00.000+00:00`;
    console.log(originalDate,originalEndDate,isoDateString,isoDateString1)
    const newParams = {
      tipo: tipo,
      city: city,
      animal: animal,
      date: isoDateString,
      endDate: isoDateString1,
      piccoli: animaliPiccoli,
      medi: animaliMedi,
      grandi: animaliGrandi
    };

    const currentSearchParams = new URLSearchParams(window.location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      currentSearchParams.set(key, value);
    });

    const newUrl = `${window.location.origin}${
      window.location.pathname
    }?${currentSearchParams.toString()}`;

    window.history.replaceState({}, "", newUrl);
  }
  
    
    onPass(data);
   
  };

  const [animali, setAnimali] = useState([])

 
  
  const handleAnimalItemClick = (key, quantity, animali, setAnimali) => {
    // Check if the key already exists in the array
    const existingIndex = animali.findIndex(item => item.key === key);
    if (existingIndex !== -1) {
      // If it exists, update the quantity
      const updatedAnimali = [...animali];
      updatedAnimali[existingIndex] = { key, quantity };
      setAnimali(updatedAnimali);
    } else {
      // If it doesn't exist, add it to the array
      setAnimali([...animali, { key, quantity }]);
    }
    console.log(animali)
  };
  
  //const { options, ...rest } = props;

  return (
    <FilterContainer>
      
      <form onSubmit={handleSubmit}>

      <Grid 
        container 
        spacing={{xs:2, sm: 2, md:8}} 
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{margin:10}}
       >
        {time? "" :
        <Grid item xs={12} sm={6} md={3}>
        <InputLabel
          sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }
          }} id="label-animali">Animali</InputLabel>
          <FormControl  size="small">
            <Select
            labelId="label-animali"
            name="animali"
            value={animalQuantity}
            sx={{
              height: 60,
              menuStyle:{
                borderRadius:5,
              },
              '.MuiList-root-MuiMenu-list' :{
                borderRadius:3,
              },
              minWidth: 300,
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
            }}>

           {
            pets.map((pet, index)=>{
              return(
                <MenuItem >
                  <Grid container alignItems="center">
                    <Grid item xs={6}>
                      {pet.name}
                    </Grid>
                    <Grid item xs={6}>
                    <Button onClick={() => {
                        if (pet.quantity > 1) {
                          if(pet.key=="piccolo" && animaliPiccoli>0 )setPiccoli(animaliPiccoli -1)
                          if(pet.key=="medio" && animaliMedi>0 )setMedi(animaliMedi -1)
                          if(pet.key=="grande" && animaliGrandi>0 )setGrandi(animaliGrandi -1)
                          setPets(prevPets => {
                            const newPets = [...prevPets];
                            newPets[index].quantity -= 1;
                            return newPets;
                          });
                        }
                      }}>-</Button>
                      <span>{pet.quantity}</span>
                      <Button onClick={() => {
                        if(pet.key==="piccolo"  ){setPiccoli(animaliPiccoli + 1);  setPets(prevPets => {
                          const newPets = [...prevPets];
                          newPets[index].quantity += 1;
                          return newPets;
                        });}
                        if(pet.key==="medio"  ){setMedi(animaliMedi + 1);  setPets(prevPets => {
                          const newPets = [...prevPets];
                          newPets[index].quantity += 1;
                          return newPets;
                        });}
                        if(pet.key==="grande" ){setGrandi(animaliGrandi + 1) ;  setPets(prevPets => {
                          const newPets = [...prevPets];
                          newPets[index].quantity += 1;
                          return newPets;
                        });}
                       
                        setAnimalQuantity(animalQuantity +1)
                        console.log(pets,animaliGrandi,animaliMedi,animaliPiccoli)
                      }}>+</Button>
                    </Grid>
                  </Grid>
                </MenuItem>
              )
            })
           }     
            </Select>
          
          </FormControl>
        </Grid>
         }
        <Grid item xs={12} sm={6} md={3}>
        <FormControl  size="small">
        <InputLabel
          sx={{
            typography:{
              fontFamily: 'Encode Sans Expanded',
            }
          }} id="label-città">Città</InputLabel>
              
              <Select
                  name="city"
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={city}
                  onChange={handleCityChange}
                  sx={{
                      height: 60,
                      menuStyle:{
                        borderRadius:5,
                      },
                      '.MuiList-root-MuiMenu-list' :{
                        borderRadius:3,
                      },
                      minWidth: 300,
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
                    cities.map((city)=>{
                      return(
                        <MenuItem
                    value={city}
                    key={city}
                    sx={{
                      borderRadius:3,
                      typography:{
                        fontFamily: 'Encode Sans Expanded',
                      },
                    }}
                    >
                    {city}
                    </MenuItem>
                      )
                    })
                  }
              </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
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
                    
                  }}
            />
            )}
          />
        
        
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
            


          </div>

        }
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Button1 type="submit">Cerca</Button1>
        </Grid>
        
      </Grid>
      </form>
    </FilterContainer>
  )
}
export default FiltriServices



//se time è true => veterinairo
//time = falso => dogsitter e daterange
/*
unica variabile in input è lì per dirmi se è dogsitting o 
servizio giornaliero tipo veterinario. L'u
nica differenza diventa
quindi la presenza della data di fine trattamento nei filtri.
Per il resto ho bisogno di Animale e numero, e data di inizio


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
  */