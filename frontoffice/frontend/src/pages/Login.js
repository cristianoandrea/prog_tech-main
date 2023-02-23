import { useState } from "react"
import { Button1 } from "../components/ButtonElement"
import { useLogin } from "../hooks/useLogin"
import { Buttone } from "./prodotto_singolo"
import Navbar from '../components/Navbar'
import styled, { useTheme } from 'styled-components'


const Container1= styled.div`
  margin-top: 80px;
  margin-left: 2em;
  margin-right: 2em;
`

const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const{login,error,isLoading} = useLogin()

    const handleSubmit = async (e)=> {
        e.preventDefault()
        await login(email,password)
    }

    return (
        <>
        <Navbar/>
        <Container1> 
        <Button1 to="/signin" >Registrati</Button1>
        <Button1 to="/" >Home</Button1>
        <form className="login" onSubmit={handleSubmit}>
            <h3>log in</h3>
            <label>Email:</label>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
              <label>Password:</label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
              <button disabled= {isLoading}>Log in</button>
              {error&& <div className="error">{error}</div>}
              
        </form>
        </Container1> 
        </>
    )
}

export default Login