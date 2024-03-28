const express = require('express')
const router = express.Router()
const PostModel = require('../models/post')


router.post('/add' , async (req,res)=>{
    const {depart,arrivee,place,contact,price,date,condition,desc} = req.body
    const  idconducteur = req.body.idFromToken
    const  nomconducteur = req.body.nameFromToken
    const newPost = PostModel({
        depart,
        arrivee,
        place,
        contact,
        price,
        date,
        condition,
        desc,
        idconducteur,
        nomconducteur
    })

    await newPost.save()
    return res.json({messaage: 'post added' , status: true, id:idconducteur})
})



router.get('/getAllPosts',async (req,res)=>{
    const allPosts = await PostModel.find({})
    return res.json({status:true , data : allPosts })
})



router.get('/getUserPost', async (req,res)=>{
    const {idFromToken} = req.body
    const userPosts = await PostModel.find({idconducteur:idFromToken})

    return res.json({status:true , data :userPosts})
})







const PostRouter = router
module.exports = PostRouter