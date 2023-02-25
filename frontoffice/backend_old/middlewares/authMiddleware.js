const jwt = require ("jsonwebtoken")
const User = require ("../models/userModel")

const protect = async(req,res,next) => {
    let token;
    const {authorization} = req.headers

    if ( req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer"))
        {
            console.log(authorization.split(' ')[1])
            try{
                token = authorization.split(' ')[1]
                const {_id} = jwt.verify(token, process.env.SECRET);
                req.user = await User.findById({ _id}).select("-password")
                next()
            }
            catch(error){
                res.status(401)
                throw new Error("Not authorized, token failed")
            }
        }
    if (!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }

}

const requireAuth = async(req,res,next) => {
    const {authorization} = req.headers
    if (!authorization) {
        return res.status(401).json ({error: 'Authorization token required'})
    }
    const token = authorization.split(' ')[1]
    
    try{
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id}).select('_id')
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }   
}

module.exports = {protect, requireAuth}