const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { UserModel } = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/user");



// Sign-up route
app.post('/sign-up', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json({ success: true, message: 'User created successfully', user }))
    .catch(error => res.status(500).json({ success: false, error: error.message }));
});

// Sign-in route
app.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ success: true, message: 'Successfully signed in', user });
        } else {
          res.status(400).json({ success: false, message: 'Incorrect password' });
        }
      } else {
        res.status(404).json({ success: false, message: 'No account found' });
      }
    })
    .catch(error => res.status(500).json({ success: false, error: error.message }));
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
