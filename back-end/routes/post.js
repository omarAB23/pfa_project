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

  await newPost.save();
  return res.json({ messaage: "post added", status: true, id: idconducteur });
});

router.get("/getAllPosts", async (req, res) => {
  const allPosts = await PostModel.find({});
  return res.json({ status: true, data: allPosts });
});

router.post("/getUserPost", async (req, res) => {
  const { idFromToken } = req.body;

  // Search for posts where the user ID (idconducteur) matches idFromToken
  const userPosts = await PostModel.find({ idconducteur: idFromToken });

  if (!userPosts) {
    return res.json({ status: false, message: "No posts found for this user" });
  }

  return res.json({ status: true, data: userPosts });
});

router.post("/getIdPost", async (req, res) => {
  const { id } = req.body;

  // Search for posts where the user ID (idconducteur) matches idFromToken
  const idPosts = await PostModel.find({ _id: id });

  if (!idPosts) {
    return res.json({ status: false, message: "No posts found for this user" });
  }

  return res.json({ status: true, data: idPosts });
});

const PostRouter = router;
module.exports = PostRouter;
