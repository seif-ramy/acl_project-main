// import React, { Component } from "react";
// import SearchBar from './SearchBar';
// import axios from 'axios';

// const Record = (props) => (
//   <tr>
//     <td>{props.record.flight_from}</td>
//     <td>{props.record.flight_to}</td>
//     <td>{props.record.flightNum}</td>
//     <td>{props.record.flight_date}</td>
//     <td>{props.record.cabin}</td>
//     <td>{props.record.noSeats}</td>
//     <td>{props.record.depTime}</td>
//     <td>{props.record.arrTime}</td>
//     <td>{props.record.terminal}</td>
//   </tr>
// );

// let array = [];

// export default class SearchResult extends Component {
//   // This is the constructor that shall store our data retrieved from the database
//   constructor(props) {
//     super(props);

//     this.data = [];
    
//     this.state = {
//       records: [],
//       From: '',
//       To: '',
//       Date: '',
//       Cabin: '',
//       Seats: '',
//       FlightNo: '',
//       Departure: '',
//       Arrival: '',
//       Terminal: '',
//       isLoading: true,
//       isRendered: true,
//     };

//   }


//   // This method will get the data from the database.
//   componentDidMount() {

//     this.setState({isRendered: false});

//       axios
//       .get("http://localhost:5000/record/")
//       .then((response) => {
//         this.setState({ records: response.data });

//         for(var i in response.data){         
//           let entry = {};

//           entry.flight_from = response.data[i].flight_from
//           entry.flight_to = response.data[i].flight_to
//           entry.flight_date = response.data[i].flight_date
//           entry.cabin = response.data[i].cabin
//           entry.noSeats = response.data[i].noSeats
//           entry.flightNum = response.data[i].flightNum
//           entry.depTime = response.data[i].depTime
//           entry.arrTime = response.data[i].arrTime
//           entry.terminal = response.data[i].terminal

//           array.push(entry);         
//         }

//         this.data = array
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//  }    

//   // recordList() {
//   //        this.state.records.forEach((currentrecord) => {
//   //         entry.flight_from = currentrecord.flight_from
//   //         entry.flight_to = currentrecord.flight_to
//   //         entry.flight_date = currentrecord.flight_date
//   //         entry.cabin = currentrecord.cabin
//   //         entry.noSeats = currentrecord.noSeats
//   //         entry.flightNum = currentrecord.flightNum
//   //         entry.depTime = currentrecord.depTime
//   //         entry.arrTime = currentrecord.arrTime
//   //         entry.terminal = currentrecord.terminal
//   //         array.push(entry)
//   //         this.data = array
//   //         console.log(entry.flight_from)
//   //         console.log(this.data)
//   //         // this.setState({
//   //         //        isLoading: false,
//   //         //       });
//   //     return (
//   //       <Record
//   //         record={currentrecord}
//   //         key={currentrecord._id}
//   //       />
//   //     );
//   //   });
//   // }

//   recordList() {
//     return this.state.records.map((currentrecord) => {  
//       return (
//         <Record
//           record={currentrecord}
//           key={currentrecord._id}
//         />
//       );
//     });
//   }



//   handleSearchEvents = (title, name) => {
//     this.setState({ [name]: title });
//   }

//   // This following section will display the table with the records of individuals.
//   render() {

//     const isRendered = this.state.isRendered;
//     console.log("RENDER BEFORE");
//     console.log(this.data);
//     const filteredData = this.data.filter((dataObj)=> 
//     (dataObj.flight_from.indexOf(this.state.From) !== -1)&&
//     (dataObj.flight_to.indexOf(this.state.To) !== -1)&&
//     (dataObj.flight_date.indexOf(this.state.Date) !== -1)&&
//     (dataObj.cabin.indexOf(this.state.Cabin) !== -1)&&
//     (dataObj.noSeats.indexOf(this.state.Seats) !== -1)&&
//     (dataObj.flightNum.indexOf(this.state.FlightNo) !== -1)&&
//     (dataObj.depTime.indexOf(this.state.Departure) !== -1)&&
//     (dataObj.arrTime.indexOf(this.state.Arrival) !== -1)&&
//     (dataObj.terminal.indexOf(this.state.Terminal) !== -1)
//     );

//     // console.log(this.filteredData);

//     return (
//       <div>
//         <SearchBar
//           from={this.state.From}
//           to={this.state.To}
//           date={this.state.Date}
//           cabin={this.state.Cabin}
//           seats={this.state.Seats}
//           flightNo={this.state.FlightNo}
//           departure={this.state.Departure}
//           arrival={this.state.Arrival}
//           terminal={this.state.terminal}
//           handleSearchEvents={this.handleSearchEvents}/>
//         <h3>Flights </h3>
//         <table className="table table-striped" style={{ marginTop: 22 }}>
//           <thead>
//             <tr>
//               <th>FROM</th>
//               <th>TO</th>
//               <th>FLIGHT NO.</th>
//               <th>DATE</th>
//               <th>CABIN</th>
//               <th>AVAILABLE SEATS</th>
//               <th>DEPARTURE TIME</th>
//               <th>ARRIVAL</th>
//               <th>TERMINAL</th>
//             </tr>
//           </thead>
//           <tbody>{isRendered ? this.data = filteredData : this.recordList()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }
