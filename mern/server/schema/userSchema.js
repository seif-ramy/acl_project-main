const mongoose = require('mongoose');
// const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Schema Or Document Structure
const userSchema = new mongoose.Schema({
    // FirstName : {
    //     type : String,
    //     required : true,
    //     unique : true
    // },
    FirstName : {
        type : String,
        required : true,
        unique : true
    },

    LastName : {
        type : String,
        required : true,
        unique : true
    },

    HomeAddress : {
        type : String,
        required : true,
        unique : true
    },

    CountryCode : {
        type : String,
        required : true,
        unique : true
    },

    TelephoneNumber : {
        type : String,
        required : true,
        unique : true
    },
    PassportNumber : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
     ]
    // flights : [
    //     {
    //         flight_from : {
    //             type : String,
    //             required : true
    //         },

    //         flight_to : {
    //             type : String,
    //             required : true
    //         },

    //         flightNum : {
    //             type : String,
    //             required : true
    //         },

    //         flight_date : {
    //             type : Date,
    //             required : true
    //         },

    //         cabin : {
    //             type : String,
    //             required : true
    //         },

    //         noSeats : {
    //             type : String,
    //             required : true
    //         },

    //         depTime : {
    //             type : String,
    //             required : true
    //         },

    //         arrTime : {
    //             type : String,
    //             required : true
    //         },

    //         terminal : {
    //             type : String,
    //             required : true
    //         }
    //     }
    

})

// // Hashing Password to Secure
// userSchema.pre('save', async function(next){
//     if(this.isModified('password')){
//         this.Password = bcryptjs.hashSync(this.password, 10);
//     }
//     next();
// })

// Generate Tokens to Verify User
userSchema.methods.generateToken = async function(){
    try {
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
        return generatedToken;
    } catch (error) {
        console.log(error)
    }
}

// Create Model
const Users = new mongoose.model("USER", userSchema);

module.exports = Users;