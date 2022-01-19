
const express = require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
const app = express();
var email="";
var flight_from= "";
var flight_to= "";
var flightNum= "";
var flight_date= "";
var cabin= "";
var noSeats= "";
var depTime= "";
var arrTime= "";
var terminal= "";


// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("myFirstDatabase");
  db_connect
    .collection("flights")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  

  let myobj = {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
  };
  db_connect.collection("flights").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.post("/payment", async (req, res, next) => {
  try {
      console.log('should be called')
      const { totalPrice, name, email } = req.body;
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "EGP",
              unit_amount: parseFloat(totalPrice) * 100,
              product_data: {
                name,
              },
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        success_url: "http://localhost:3000/user_home?success=true",
        cancel_url: "http://localhost:3000/user_home?success=false",
      });
      if (session) {
          res.redirect(303, session.url);
      } else {  
        const error = new Error("Cannot complete transaction");
        next(error);
      }
    } catch (err) {
      next(err);
    }
});

recordRoutes.post("/pay", async (req, res) => {
  const { product, token, email } = req.body;

  return stripe.customers
    .create({
      email,
      source: token.id,
      email,
    })
    .then((customer) => {
      stripe.charges
        .create({
          amount: product.price * 100,
          currency: "egp",
          customer: customer.id,
          receipt_email: email,
        })
        .then((result) => {
          console.log(result);
          res.status(200).json({
            charge: result,
          });
        });
    })
    .catch((err) => console.log(err));
});

recordRoutes.post(
"/refund",
//   userController.refundPipeline,
async (req, res) => {
  res.status(201).json({
    message: "Refunded successfully",
    refund: req.refund,
  });
}
);


// Login User
recordRoutes.route("/login").post(async function (req, res){

  try {
    mongoose.connect(
      process.env.ATLAS_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => {
        console.log('Connected to MongoDB');
      }
    );
      email = req.body.email;
      console.log(email);
      const password = req.body.password;
      console.log(password);
      // Find User if Exist
      const user = await Users.findOne({email : email});
      if(user){
          // Verify Password
          console.log("hi")
          const isMatch = await bcrypt.compare(password, user.password);
          console.log(user.password);
          if(isMatch){
            console.log("hi");
            // Generate Token Which is Define in User Schema
            const token = await user.generateToken();
            res.cookie("jwt", token, {
                // Expires Token in 24 Hours
                expires : new Date(Date.now() + 86400000),
                httpOnly : true
            })
            
            res.status(200).send("LoggedIn")
            
          }else{
              res.status(400).send("Invalid Credentials");
          }
      }else{
          res.status(400).send("Invalid Credentials");
      }

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }
})

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  console.log(req.params.id);
  db_connect
      .collection("flights")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
        flight_from = result.flight_from;
        flight_to=result.flight_to;
        flightNum=result.flightNum;
        flight_date=result.flight_date;
        cabin=result.cabin;
        noSeats=result.noSeats;
        depTime=result.depTime;
        arrTime=result.arrTime;
        terminal=result.terminal;
      });
});

// const Bookings = require('/Users/seiframy/Downloads/acl_project-main/mern/server/schema/bookings.js');

// recordRoutes.route("/allBookings").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = {email: email};
//   db_connect
//       .collection("userBookings")
//       .find(myquery, function (err, result) {
//         if (err) throw err;
//         console.log(result.flight_from)
//         res.status(200).send("LoggedIn")
//         // res.json(result);
//         // flight_from = result.flight_from;
//         // flight_to=result.flight_to;
//         // flightNum=result.flightNum;
//         // flight_date=result.flight_date;
//         // cabin=result.cabin;
//         // noSeats=result.noSeats;
//         // depTime=result.depTime;
//         // arrTime=result.arrTime;
//         // terminal=result.terminal;
//       });
// });

recordRoutes.route("/userBookings").post(async function (req, res){

  try {
    mongoose.connect(
      process.env.ATLAS_URI,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      () => {
        console.log('Connected to MongoDB');
      }
    );
      // Find User if Exist
      const user = await Users.findOne({email : email});
      if(user){
        let myobj = {
          email: email,
          flight_from: flight_from,
          flight_to: flight_to,
          flightNum: flightNum,
          flight_date: flight_date,
          cabin: cabin,
          noSeats: noSeats,
          depTime: depTime,
          arrTime: arrTime,
          terminal: terminal,
        };
        let db_connect = dbo.getDb();
        db_connect.collection("userBookings").insertOne(myobj, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
          
            
            res.status(200).send("LoggedIn")
            
          
      }else{
          res.status(400).send("Invalid Credentials");
      }

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }
})



recordRoutes.route("/userProfile").get(function (req, res) {
  console.log("eshtaa");
  console.log(email);
  let db_connect = dbo.getDb("myFirstDatabase");
  db_connect
    .collection("users")
    .find({email:email})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});





// This section will help you get a single record by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});





recordRoutes.route("/user/add").post(async function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    HomeAddress: req.body.HomeAddress,
    CountryCode: req.body.CountryCode,
    TelephoneNumber:req.body.TelephoneNumber,
    PassportNumber:req.body.PassportNumber,
    username: req.body.username,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password,10)
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// recordRoutes.route("/record/adduser").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     FirstName: req.body.FirstName,
//     LastName: req.body.LastName,
//     Email: req.body.Email,
//     Password: req.body.Password,
//   };
//   db_connect.collection("users").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });


//Require Model
const Users = require('mern/server/routes/record.js');


   

// Login User
// recordRoutes.route("/userProfile").post(async function (req, res){

//   try {
//     mongoose.connect(
//       process.env.ATLAS_URI,
//       { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//       () => {
//         console.log('Connected to MongoDB');
//       }
//     );
//        const email = req.body.email;
//       // console.log(email);
//       // const password = req.body.password;
//       // console.log(password);

      
//         // const email = JSON.parse(localStorage.getItem("profile")).user.email;
//         console.log(email)
//       // Find User if Exist
//       const user = await Users.findOne({email : email});
//       console.log(user.username)
//       console.log(user.email)
//       console.log(user.password)
//       res.status(200).send("Success");
//      } catch (error) {
//     console.log(error)
//     res.status(400).send("error");
//   }
// })


recordRoutes.route("/changePass").post(async function (req, res){
  //      await Users.findOne({email:req.body.email}).then(async (user)=>{
  //     if (user==null) {
  //        return res.status(400).send('Cannot find user');
  //   }
  //   var found=false;
  //   found = await bcrypt.compare(req.body.password, user.password);
  //   try {
  //     if(found){
  //       console.log(process.env.ACCESS_TOKEN_SECRET);
  //       const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  //       res.json({accessToken: accessToken});
  // } else {
  //     res.send('Not Allowed');
  // }
  //   } catch (error) {
  //     console.log(error)
  //     res.status(400).send("error");
  //   }
  
  //     })
  //   });
    try {
      mongoose.connect(
        process.env.ATLAS_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        () => {
          console.log('Connected to MongoDB');
        }
      );
        const email = req.body.email;
        console.log(email); 
        const oldPass = req.body.oldPass;
        console.log(oldPass);
        const newPass = req.body.newPass;
        console.log(newPass);
        // Find User if Exist
        const user = await Users.findOne({email : email});
        // console.log(user);
      if(user){
          // Verify Password
          console.log("hi")
          console.log(oldPass);
          console.log(user.password);
          const isMatch = await bcrypt.compare(oldPass, user.password);
          console.log(user.password);
          console.log(isMatch);
          if(isMatch){
            const hashedpassword= await bcrypt.hash(newPass,10)
            await Users.findOneAndUpdate({email : email},{password:hashedpassword});
           
    //         let db_connect = dbo.getDb();
    //         let myquery = { _id: ObjectId( req.params.id )};
    //         let newvalues = {
    //         $set: {
    //           email: email,
    //           password: newPass
    //            },
    //                };
    //       db_connect
    //       .collection("users")
    //       .updateOne(myquery, newvalues, function (err, res) {
    //       if (err) throw err;
    //       console.log("1 document updated");
    //       response.json(res);
    // });
    res.status(200).send("Password Updated Successfully")
          }else{
              res.status(400).send("Invalid Credentials");
          }
      }else{
          res.status(400).send("Invalid Credentials");
      }

  } catch (error) {
    console.log(error)
    res.status(400).send("error");
  }
})












// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
    flight_from: req.body.flight_from,
    flight_to: req.body.flight_to,
    flightNum: req.body.flightNum,
    flight_date: req.body.flight_date,
    cabin: req.body.cabin,
    noSeats: req.body.noSeats,
    depTime: req.body.depTime,
    arrTime: req.body.arrTime,
    terminal: req.body.terminal,
    },
  };
  db_connect
    .collection("flights")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/userupdate/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    HomeAddress: req.body.HomeAddress,
    CountryCode: req.body.CountryCode,
    TelephoneNumber: req.body.TelephoneNumber,
    PassportNumber: req.body.PassportNumber,
    username: req.body.username,
    email: req.body.email,
    password:req.body.password
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("flights").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = recordRoutes;
