import { useState,useEffect } from "react"
import * as React from 'react';
import axios from 'axios';
import { useLogout } from "../hooks/useLogout";
import {Row, Col, Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"

const ProfileScreen = () => {

  const dispatch = useDispatch();
  const {logout} = useLogout();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleClick =()=>{
    logout()
  }

  const submitHandler= (e) => {
    e.preventDeafault()

    //if(password === confirmPassword)
     // dispatch(updateProfile({name,email,password}))
  }


   return(
    <div>
    <Button onClick={handleClick}>Log out</Button>
      <Row className= 'profileContainer'>
         <Col md={6}>
         <Form onSubmit={submitHandler}>
           <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
               type= "text"
               placeholder="Enter Name"
               value= {name}
               onChange= {(e)=>setName(e.target.value)}>
               </Form.Control>
               </Form.Group>
               <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
               type= "email"
               placeholder="Enter Email"
               value= {email}
               onChange= {(e)=>setEmail(e.target.value)}>
               </Form.Control>
               </Form.Group>
               <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
               type= "password"
               placeholder="Enter Password"
               value= {password}
               onChange= {(e)=>setPassword(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Form.Group controlId="Confirm password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control 
               type= "password"
               placeholder="Confirm Password"
               value= {confirmPassword}
               onChange= {(e)=>setConfirmPassword(e.target.value)}>
               </Form.Control>
           </Form.Group>
           <Button type="submit" varient="primary">
            Update
           </Button>
         </Form>
         </Col>
         
      </Row>
    </div>
    )
  }
  
  export default ProfileScreen