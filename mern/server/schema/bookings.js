const mongoose = require('mongoose');

const Booking  = new mongoose.Schema({

    email : {
        type : String,
        required : true,
        unique : true,
    },

    // tokens : [
    //     {
    //         token : {
    //             type : String,
    //             required : true
    //         }
    //     }
    //  ]
    flights : [
        {
            flight_from : {
                type : String,
                required : true
            },

            flight_to : {
                type : String,
                required : true
            },

            flightNum : {
                type : String,
                required : true
            },

            flight_date : {
                type : Date,
                required : true
            },

            cabin : {
                type : String,
                required : true
            },

            noSeats : {
                type : String,
                required : true
            },

            depTime : {
                type : String,
                required : true
            },

            arrTime : {
                type : String,
                required : true
            },

            terminal : {
                type : String,
                required : true
            }
        }
    ]
    

})



// Create Model
const Bookings = new mongoose.model("USER", Bookings);

module.exports = Bookings;