const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { UserModel } = require('./models/user');
require('dotenv').config()
const UserRouter = require('./routes/user')
const cookieParser = require('cookie-parser');
const PostRouter = require('./routes/post');


const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors({
  origin : ["http://localhost:5173"],
  credentials : true ,
}));
app.use(cookieParser())

mongoose.connect("mongodb://127.0.0.1:27017/user");



app.use('/auth',UserRouter)

app.use('/post',PostRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
