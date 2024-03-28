const express = require("express");
const router = express.Router();
const PostModel = require("../models/post");

router.post("/add", async (req, res) => {
  const { depart, arrivee, place, contact, price, date, condition, desc } =
    req.body;
  const idconducteur = req.body.idFromToken;
  const nomconducteur = req.body.nameFromToken;
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
    nomconducteur,
  });

<<<<<<< HEAD
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
=======
  await newPost.save();
  return res.json({ messaage: "post added", status: true, id: idconducteur });
});

router.get("/getAllPosts", async (req, res) => {
  const allPosts = await PostModel.find({});
  return res.json({ status: true, data: allPosts });
});
>>>>>>> 693053c (adding searchfilter and historique)

router.post("/myposts", async (req, res) => {
  try {
    const idconducteur = req.body.id;
    const userPosts = await PostModel.find({ idconducteur });

    if (userPosts.length === 0) {
      return res.json({
        status: false,
        message: "No posts found for the user",
      });
    }

    res.json({ status: true, data: userPosts });
  } catch (error) {
    console.error("Error fetching user posts:", error);
    res.status(500).json({ status: false, error: "Error fetching user posts" });
  }
});

const PostRouter = router;
module.exports = PostRouter;
