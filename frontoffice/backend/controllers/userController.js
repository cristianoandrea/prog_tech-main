const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const validator = require("validator");


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password } = req.body
  
  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({_id:user._id,name: user.name,email: user.email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  console.log(req.body)
  const {email, password, name, cognome, sesso,dataNascita,favoriteAnimal } = req.body
  console.log(email, password, name, cognome, sesso,dataNascita,favoriteAnimal)
  try {
    const user = await User.signup(email, password, name, cognome, sesso,dataNascita,favoriteAnimal)
    console.log("!!!!user:",user)
    // create a token
    const token = createToken(user._id)

    res.status(200).json({_id:user._id,name: user.name,email: user.email, token, cognome:user.cognome, sesso:user.sesso, nascita:user.nascita, animale:user.animale})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateUserProfile = async (req,res)=> {
  console.log(req.body)
  const user = await User.findById(req.body.user._id)

  if(user){ 
    
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.cognome = req.body.cognome || user.cognome
    user.animale = req.body.animale || user.animale
    user.prodotti = user.prodotti
    user.servizi = user.servizi

    if(req.body.password){
      const password = req.body.password
      if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough");
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      user.password = hash
    }

    const updatedUser = await user.save()
    console.log(updatedUser)

    res.json ({
      _id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      token:createToken(updatedUser._id),
      cognome:updatedUser.cognome, 
      sesso:updatedUser.sesso, 
      dataNascita:updatedUser.nascita, 
      servizi:updatedUser.servizi,
      prodotti:updatedUser.prodotti
    })
  }
  else {
    res.status(404);
    throw new Error("User not found!")
  }

}

module.exports = { signupUser, loginUser, updateUserProfile }