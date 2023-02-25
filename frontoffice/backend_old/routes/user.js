const express = require('express')
const {protect} = require('../middlewares/authMiddleware')
const { loginUser, signupUser, updateUserProfile } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

router.route('/profile').post(protect,updateUserProfile)

module.exports = router