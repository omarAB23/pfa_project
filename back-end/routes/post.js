const express = require('express')
const router = express.Router()
const PostModel = require('../models/post')


router.post('/add' , async (req,res)=>{
    const {depart,arrivee,place,contact,price,date,Condition,desc} = req.body
    
    const newPost = PostModel({
        depart,
        arrivee,
        place,
        contact,
        price,
        date,
        Condition,
        desc
    })

    await newPost.save()
    return res.json({messaage: 'post added' , status: true})
})













const PostRouter = router
module.exports = PostRouter