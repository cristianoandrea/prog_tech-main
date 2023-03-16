const express = require('express')
const {protect} = require('../middlewares/authMiddleware')
const { loginUser, signupUser, updateUserProfile } = require('../controllers/userController')
const { Prod } = require('@tensorflow/tfjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');


const router = express.Router()
 
// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

//router.route('/profile').post(protect,updateUserProfile)
router.post('/profile',updateUserProfile)

router.patch('/addProducts', async(req,res)=>{
    console.log(req.body)
    const userId = req.body.user._id
    const prod = req.body.prod
    const data = req.body.currentDate
    console.log("this are the products: "+ prod[0].id, prod[0].quantity)
    User.findOneAndUpdate(
        { _id: userId },
        { $push: { prodotti: { $each: prod.map(item => ({ numId: item.id, quantità: Number(item.quantity), dataAcquisto: data })) } } },
        { new: true }, 
        (err, user) => {
          if (err) {
            console.error(err);
          } else {
            console.log("//////////////")
            console.log(user);
            res.status(200).json(user);
          }
        }
      );

})

router.patch('/addService', async(req,res)=>{
  console.log(req.body)
  const userId = req.body.user._id
  const prod = req.body.prod
  const data = req.body.currentDate
  const tipo = req.body.tipo

  const servizio = {
    numId: prod.servizio_id,
    datainiz: prod.start_date,
    dataAcquisto: data,
    tipo: tipo
  };

  if (prod.end_date) {
    servizio.datafin = prod.end_date;
  }

  User.findOneAndUpdate(
    { _id: userId },
    { $push: { servizi: servizio } },
    { new: true }, 
    (err, user) => {
      if (err) {
        console.error(err);
      } else {
        console.log("//////////////")
        console.log(user);
        res.status(200).json(user);
      }
    }
  );
});


module.exports = router 