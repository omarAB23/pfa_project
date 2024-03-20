const express = require('express')
const router = express.Router()
const PostModel = require('../models/post')


router.post('/add' , async (req,res)=>{
    const {depart,arrivee,place,contact,price,date,condition,desc} = req.body
    
    const newPost = PostModel({
        depart,
        arrivee,
        place,
        contact,
        price,
        date,
        condition,
        desc
    })

    await newPost.save()
    return res.json({messaage: 'post added' , status: true})
})



router.get('/getAllPosts',async (req,res)=>{
    const allPosts = await PostModel.find({})
    return res.json({status:true , data : allPosts })
})











const PostRouter = router
module.exports = PostRouter