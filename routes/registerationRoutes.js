//introduce express
const express = require("express");

//Accesing the router function in express
const router = express.Router();

//introduce the model
const UserRegister = require("../models/registration");

router.get("/register" , (req, res)=>{
    res.render('form')
})

router.post("/register", async(req, res) => {
    try {
    const user = new UserRegister (req.body);
    console.log(user);
    await user.save();
    res.send("user registered")
    } catch (error) {
      res.status(400)
      console.log("error registering user", error)
    }
    
  });

  module.exports = router;