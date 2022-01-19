const mongoose= require('mongoose');
const Db = process.env.ATLAS_URI;
mongoose.connect(Db);

var db=mongoose.connection;
db.on('erro',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("flight success")

const flightSchema= new mongoose.Schema({
From: {
    type:String,
    required:true
},

To: {
    type:String,
    required:true
},
FlightDate: {
    type: Date,
    required:true
},

Cabin: {
    type: String,
    required:true
},

SeatsAvailable: {
    type: String,
    required:true
},

FlightNumber: {
    type: String,
    required:true
},

ArrivalTime: {
    type: String,
    required:true
},

DepartureTime: {
    type: String,
    required:true
},

AirportTerminal: {
    type: String,
    required:true
}
})


const flight=new mongoose.model("flights",flightSchema);
module.exports = flight;


// var f1 = [
//     {From:"LAX",
//     To:"JFK",
//     FlightDate:"12-1-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"20",
//     FlightNumber: "FGHY67Q",
//     ArrivalTime: "12:06",
//     DepartureTime: "09:53",
//     AirportTerminal: "1"},

//     {From:"LAX",
//     To:"JFK",
//     FlightDate:'12-1-2022',
//     Cabin:"Business",
//     SeatsAvailable:"10",
//     FlightNumber: "WHSBMK98",
//     ArrivalTime: "12:06",
//     DepartureTime: "08:53",
//     AirportTerminal: "1"},

//     {From:"LAX",
//     To:"JFK",
//     FlightDate:'12-1-2022',
//     Cabin:"First",
//     SeatsAvailable:"62",
//     FlightNumber: "98KJSYU",
//     ArrivalTime: "12:06",
//     DepartureTime: "06:53",
//     AirportTerminal: "2"},
    
//     {From:"JFK",
//     To:"LAX",
//     FlightDate:"22-1-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"30",
//     FlightNumber: "HSGB98",
//     ArrivalTime: "12:06",
//     DepartureTime: "02:53",
//     AirportTerminal: "1"},

//     {From:"JFK",
//     To:"LAX",
//     FlightDate:'22-1-2022',
//     Cabin:"Business",
//     SeatsAvailable:"15",
//     FlightNumber: "WR568HS",
//     ArrivalTime: "12:06",
//     DepartureTime: "01:53",
//     AirportTerminal: "3"},

//     {From:"JFK",
//     To:"LAX",
//     FlightDate:'22-1-2022',
//     Cabin:"First",
//     SeatsAvailable:"16",
//     FlightNumber: "87JSHNM",
//     ArrivalTime: "12:06",
//     DepartureTime: "19:53",
//     AirportTerminal: "3"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:"21-2-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"22",
//     FlightNumber: "KJNMSHX6",
//     ArrivalTime: "12:06",
//     DepartureTime: "20:53",
//     AirportTerminal: "2"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:'21-2-2022',
//     Cabin:"Business",
//     SeatsAvailable:"29",
//     FlightNumber: "HSJNSG7",
//     ArrivalTime: "12:06",
//     DepartureTime: "21:53",
//     AirportTerminal: "1"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:'21-2-2022',
//     Cabin:"First",
//     SeatsAvailable:"59",
//     FlightNumber: "KSJ765SG",
//     ArrivalTime: "12:06",
//     DepartureTime: "23:53",
//     AirportTerminal: "1"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:"6-3-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43",
//     FlightNumber: "HSYUWI8",
//     ArrivalTime: "12:06",
//     DepartureTime: "11:53",
//     AirportTerminal: "3"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:'6-3-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26",
//     FlightNumber: "BS4356X",
//     ArrivalTime: "12:06",
//     DepartureTime: "13:53",
//     AirportTerminal: "3"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:'6-3-2022',
//     Cabin:"First",
//     SeatsAvailable:"16",
//     FlightNumber: "QIWIX80",
//     ArrivalTime: "12:06",
//     DepartureTime: "05:53",
//     AirportTerminal: "3"},

//     {From:"CAI",
//     To:"DXB",
//     FlightDate:"10-4-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"50",
//     FlightNumber: "QUS644Z",
//     ArrivalTime: "12:06",
//     DepartureTime: "09:45",
//     AirportTerminal: "2"},

    // {From:"CAI",
    // To:"DXB",
    // FlightDate:'10-4-2022',
    // Cabin:"Business",
    // SeatsAvailable:"22"},

    // {From:"CAI",
    // To:"DXB",
    // FlightDate:'10-4-2022',
    // Cabin:"First",
    // SeatsAvailable:"10"},

    // {From:"DXB",
    // To:"CAI",
    // FlightDate:"18-4-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"50"},

    // {From:"DXB",
    // To:"CAI",
    // FlightDate:'18-4-2022',
    // Cabin:"Business",
    // SeatsAvailable:"22"},

    // {From:"DXB",
    // To:"CAI",
    // FlightDate:'18-4-2022',
    // Cabin:"First",
    // SeatsAvailable:"10"},

    // {From:"CDG",
    // To:"MUC",
    // FlightDate:"25-4-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"43"},

    // {From:"CDG",
    // To:"MUC",
    // FlightDate:'25-4-2022',
    // Cabin:"Business",
    // SeatsAvailable:"26"},

    // {From:"CDG",
    // To:"MUC",
    // FlightDate:'25-4-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"},

    // {From:"MUC",
    // To:"CDG",
    // FlightDate:"2-5-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"43"},

    // {From:"MUC",
    // To:"CDG",
    // FlightDate:'2-5-2022',
    // Cabin:"Business",
    // SeatsAvailable:"26"},

    // {From:"MUC",
    // To:"CDG",
    // FlightDate:'2-5-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"},

    // {From:"LHR",
    // To:"CDG",
    // FlightDate:"6-5-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"30"},

    // {From:"LHR",
    // To:"CDG",
    // FlightDate:'6-5-2022',
    // Cabin:"Business",
    // SeatsAvailable:"13"},

    // {From:"LHR",
    // To:"CDG",
    // FlightDate:'6-5-2022',
    // Cabin:"First",
    // SeatsAvailable:"3"},

    // {From:"CDG",
    // To:"LHR",
    // FlightDate:"17-5-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"60"},

    // {From:"CDG",
    // To:"LHR",
    // FlightDate:'17-5-2022',
    // Cabin:"Business",
    // SeatsAvailable:"16"},

    // {From:"CDG",
    // To:"LHR",
    // FlightDate:'17-5-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"},

    // {From:"CAI",
    // To:"RUH",
    // FlightDate:"6-6-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"43"},

    // {From:"CAI",
    // To:"RUH",
    // FlightDate:'6-6-2022',
    // Cabin:"Business",
    // SeatsAvailable:"26"},

    // {From:"CAI",
    // To:"RUH",
    // FlightDate:'6-6-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"},

    // {From:"RUH",
    // To:"CAI",
    // FlightDate:"16-6-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"22"},

    // {From:"RUH",
    // To:"CAI",
    // FlightDate:'16-6-2022',
    // Cabin:"Business",
    // SeatsAvailable:"10"},

    // {From:"RUH",
    // To:"CAI",
    // FlightDate:'16-6-2022',
    // Cabin:"First",
    // SeatsAvailable:"6"},

    // {From:"YYZ",
    // To:"FRA",
    // FlightDate:"7-7-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"43"},

    // {From:"YYZ",
    // To:"FRA",
    // FlightDate:'7-7-2022',
    // Cabin:"Business",
    // SeatsAvailable:"26"},

    // {From:"YYZ",
    // To:"FRA",
    // FlightDate:'7-7-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"},

    // {From:"FRA",
    // To:"YYZ",
    // FlightDate:"8-8-2022",
    // Cabin:"Economy",
    // SeatsAvailable:"43"},

    // {From:"FRA",
    // To:"YYZ",
    // FlightDate:'8-8-2022',
    // Cabin:"Business",
    // SeatsAvailable:"26"},

    // {From:"FRA",
    // To:"YYZ",
    // FlightDate:'8-8-2022',
    // Cabin:"First",
    // SeatsAvailable:"16"}
    // ];
    
    // flight.collection.insertOne(f1,function(err,docs){
    //     if(err){
    //         return console.error(err);
    //     }
    //     else{
    //       console.log("Multiple documents inserted")
    //     }
    // })

    // const axios = require('axios')

    //   axios
    //   .post("http://localhost:5000/record/add", f1)
    //   .then((res) => console.log(res.data));

    })
    
