import { useState } from "react"
import { Button1 } from "../components/ButtonElement"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email,password, name)
    await signup(email, password, name)
  }

  return (
    <>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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
      

      <button disabled= {isLoading} >Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    <Button1 to="/login" >Login</Button1>
    <Button1 to="/" >Home</Button1>
    </>
  )
}

export default Signup