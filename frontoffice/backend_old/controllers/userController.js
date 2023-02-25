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
  const {email, password, name} = req.body

  try {
    const user = await User.signup(email, password, name)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({_id:user._id,name: user.name,email: user.email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const updateUserProfile = async (req,res)=> {
  const user = await User.findById(req.user._id)

  if(user){
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if(req.body.password){
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json ({
      _id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      token:createToken(updatedUser._id)
    })
  }
  else {
    res.status(404);
    throw new Error("User not found!")
  }

}

module.exports = { signupUser, loginUser, updateUserProfile }