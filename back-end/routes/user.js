const express = require('express')
const bcrypt = require('bcrypt')
const UserModel = require("../models/user")
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/sign-up',async (req,res)=>{
    const {name,email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(user){
        return res.json({message:'user already exists'})
    }

    const hashpassword = await bcrypt.hash(password , 10)
    const newUser= new UserModel({
        name, 
        email,
        password : hashpassword   

    })

    await newUser.save()
    return res.json({messaage: 'registerd'})

})


router.post('/sign-in' , async (req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(!user){
        return res.json({message:'user is not registerd'})
    }

    const validPassword = await bcrypt.compare(password , user.password)

    if(!validPassword){
        res.json({message:'password is incorrect'})
    }

    const token = jwt.sign({name : user.name} ,process.env.KEY, {expiresIn: '1h'})

    res.cookie('token',token , {httpOnly : true , maxAge: ' 3600000'})

    return res.json({status :true , message : 'login successfully'})
})



const verifyUser =async (req ,res ,next)=>{
    
    try {
        const token = req.cookies.token ;
        if(!token){
            return res.json({status : false , messaage : "no token"})
        }

        const decoded = await jwt.verify(token , process.env.KEY);
        next()
    } catch (error) {
        return res.json({error})
    }
    



}






router.get('/verify' , verifyUser, (req,res)=>{
    return res.json({status:true , messaage:'authorised'})
})

router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({status:true})
})




const UserRouter = router;
module.exports = UserRouter;