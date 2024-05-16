//Dependencies
const express = require("express");//for posting 
const mongoose = require("mongoose")//for mongodb
const path = require("path");
const passport = require("passport");
const expressSession = require("express-session")({
  secret:"secret",
  resave:false,
  saveUninitialized:false
})


require("dotenv").config();



//importing routes
const registrationRoutes = require("./routes/registerationRoutes")



//Instantiations
const app = express();

//Configurations
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
});

mongoose.connection
  .once("open" , ()=>{
    console.log("mongoose connection open");
  })
  .on("error", err => {
    console.error("connection error: ${err. message}");
  });

  app.set("view engine" , "pug");//setting the view engine to pug
  app.set("views" , path.join(__dirname, "views"));  //specify the directory where views are found


//Middleware
app.use(express.static(path.join(__dirname, "public")))//set directory for static files
app.use(express.urlencoded({extended:true}));
app.use(express.json());




//using imported routes
app.use("/" , registrationRoutes)






// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
//Bootstrapping Server
//Always the last line in your code
app.listen(5500, () => console.log('listening on port 5500')); 