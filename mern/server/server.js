const express = require("express");
const recordRoutes = express.Router();
const app = express();
const cors = require("cors");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const dbo = require("./db/conn");
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

app.use(require("./routes/record"));
// get driver connection

 
// // Require Model
// const Users = require('/Users/seiframy/Downloads/acl_project-main/mern/server/schema/userSchema.js');

// // These Method is Used to Get Data and Cookies from FrontEnd
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));
// app.use(cookieParser());

// app.get('/', (req, res)=>{
//   res.send("Hello World");
// })

// //Registration
// app.post('/register', async (req, res)=>{
//   try {
//       // Get body or Data
//       const username = req.body.username;
//       const email = req.body.email;
//       const hashedpassword = await bcrypt.hash(req.body.password,10);

//       const createUser = new Users({
//           username : username,
//           email : email,
//           password : hashedpassword
//       });

//       // Save Method is Used to Create User or Insert User
//       // But Before Saving or Inserting, Password will Hash 
//       // Because of Hashing. After Hash, It will save to DB
//       createUser.save();
//       res.send(createUser)
//       res.status(200).send("Registered");

//   } catch (error) {
//       res.status(400).send(error)
//   }
// });
// recordRoutes.route("/record/adduser").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = new Users({
//      username : username,
//      email : email,
//      password : password
//        });
//   // let myobj = {
//   //   username: req.body.username,
//   //   email: req.body.email,
//   //   password: req.body.password,
    
//   // };
//   db_connect.collection("users").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });
// Login User
// recordRoutes.route("/login").post(async function (req, res){
//   await Users.findOne({email:req.body.email}).then(async (user)=>{
//   if (user==null) {
//      return res.status(400).send('Cannot find user');
// }
// var found=false;
// found = await bcrypt.compare(req.body.password, user.password);
// try {
//   if(found){
//     console.log(process.env.ACCESS_TOKEN_SECRET);
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     res.json({accessToken: accessToken});
// } else {
//   res.send('Not Allowed');
// }
// } catch (error) {
//   console.log(error)
//   res.status(400).send("error");
// }

//   })
// });



