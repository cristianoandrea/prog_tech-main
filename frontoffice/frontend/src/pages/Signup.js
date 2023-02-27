import { Box } from "@mui/material"
import { useState } from "react"

import { Button1 } from "../components/ButtonElement"
import { useSignup } from "../hooks/useSignup"
import { Buttone } from "./prodotto_singolo"
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [name, setName] = useState('')
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email,password, name)
    await signup(email, password, name)
    //navigate('http://localhost:3000/');
  }

  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop:20
      }}>
        
        
        <h1>Registrati</h1>
        <form className="signup" onSubmit={handleSubmit}>
          
          <label>Email address:</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
          <label>Password:</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
          <label>Name</label>
          <input 
            type="name" 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />

          <Buttone style={{margin:10}} disabled={isLoading}>Sign up</Buttone>
          {error && <div className="error">{error}</div>}
        </form>

        <p>Hai già un account? Allora procedi col login <span><Button1 to="/login">Login</Button1></span></p>

        <Button1 to="/">Home</Button1>
        
      </Box>
    </>
  )
}

export default Signup