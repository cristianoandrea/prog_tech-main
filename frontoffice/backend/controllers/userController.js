const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

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

  try {
    const user = await User.signup(email, password, name, cognome, sesso,dataNascita,favoriteAnimal)
    
    // create a token
    const token = createToken(user._id)

    res.status(200).json({_id:user._id,name: user.name,email: user.email, token, cognome:user.cognome, sesso:user.sesso, dataNascita:user.nascita, favoriteAnimal:user.favoriteAnimal})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateUserProfile = async (req,res)=> {
  console.log(req.body)
  const user = await User.findById(req.body.user._id)

  if(user){ console.log('inside user')
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.cognome = req.body.cognome || user.cognome
    user.favoriteAnimal = req.body.fav || user.favoriteAnimal

    if(req.body.password){
      user.password = req.body.password
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
      //favoriteAnimal:user.favoriteAnimal
    })
  }
  else {
    res.status(404);
    throw new Error("User not found!")
  }

}

module.exports = { signupUser, loginUser, updateUserProfile }