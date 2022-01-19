import React,  {Component}  from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class Bookings extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      id:"",
      flight_from: "",
      flight_to: "",
      flightNum: "",
      flight_date: "",
      cabin: "",
      noSeats: "",
      depTime: "",
      arrTime: "",
      terminal: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5001/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          id: response.data._id,
          flight_from: response.data.flight_from,
          flight_to: response.data.flight_to ,
          flightNum: response.data.flightNum,
          flight_date:response.data.flight_date ,
          cabin:response.data.cabin ,
          noSeats: response.data.noSeats,
          depTime: response.data.depTime,
          arrTime: response.data.arrTime,
          terminal: response.data.terminal,
        });
        var array = [];
        array.push(response.data);
        console.log(array[0].flight_from)
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (

      <div>
        <h3>My Flights</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>FLIGHT NO.</th>
              <th>DATE</th>
              <th>CABIN</th>
              <th>AVAILABLE SEATS</th>
              <th>DEPARTURE TIME</th>
              <th>ARRIVAL</th>
              <th>TERMINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
        {/* <td>{this.props.id} </td> */}
        <td>{this.state.flight_from} </td>
        <td>{this.state.flight_to}</td>
        <td>{this.state.cabin}</td>
        <td>{this.state.noSeats}</td>
        <td>{this.state.flight_date}</td>
        <td>{this.state.flightNum}</td>
        <td>{this.state.depTime}</td>
        <td>{this.state.arrTime}</td>
        <td>{this.state.terminal}</td>
        <td>
        <Link to={"/selectseats"}>Select Seats</Link> | <Link to={"/user/search"}>Change Flight</Link> | 
      <a
        href={"http://localhost:3000/user/search"}
        onClick={() => {
          if(window.confirm("Are You Sure You Want to Cancel This Flight?")){
            console.log("Cancelled")
          }
        }}
      >
        Cancel Flight
      </a>
    </td>
        {/* <td>
      <a
        href="/"
        onClick={() => {
          if(window.confirm("Are You Sure You Want to Cancel This Reservation?")){
            props.deleteRecord(this.state.id);
          }
        }}
      >
        Cancel Reservation
      </a>
    </td> */}
          </tr>
           </tbody>
        </table>
      </div>
      
        );
  }

}

export default withRouter(Bookings);






















// import React, { Component } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";

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

// export default class Bookings extends Component {
//   // This is the constructor that shall store our data retrieved from the database
//   constructor(props) {
//     super(props);
//     this.state = { records: [] };
//   }

//   // This will get the record based on the id from the database.
//   componentDidMount() {
//     axios
//       .get("http://localhost:5001/record/" + this.props.match.params.id)    //this.props._id
//       .then((response) => {
//         this.setState({ records: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }


//   // // This will get the record based on the id from the database.
//   // componentDidMount() {
//   //   axios
//   //     .get("http://localhost:5001/record/" + this.props.match.params.id)
//   //     .then((response) => {
//   //       this.setState({
//   //         flight_from: response.data.flight_from,
//   //         flight_to: response.data.flight_to ,
//   //         flightNum: response.data.flightNum,
//   //         flight_date:response.data.flight_date ,
//   //         cabin:response.data.cabin ,
//   //         noSeats: response.data.noSeats,
//   //         depTime: response.data.depTime,
//   //         arrTime: response.data.arrTime,
//   //         terminal: response.data.terminal,
//   //       });
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // }

  

  // This method will map out the users on the table
  // This method will map out the users on the table
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

//   // This following section will display the table with the records of individuals.
//   render() {
//     return (
//       <div>
//         <h3>Record List</h3>
//         <table className="table table-striped" style={{ marginTop: 20 }}>
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
//           <tbody>{this.recordList()}</tbody>
//         </table>
//       </div>
//     );
//   }
// }





















// import React,  {Component}  from "react";
// // This will require to npm install axios
// import axios from "axios";
// import { withRouter } from "react-router";

// const Record = (props) => (
//     <tr>
//       <td>{props.record.flight_from}</td>
//       <td>{props.record.flight_to}</td>
//       <td>{props.record.flightNum}</td>
//       <td>{props.record.flight_date}</td>
//       <td>{props.record.cabin}</td>
//       <td>{props.record.noSeats}</td>
//       <td>{props.record.depTime}</td>
//       <td>{props.record.arrTime}</td>
//       <td>{props.record.terminal}</td>
//     </tr>
//   );

// class Bookings extends Component {
  
//   constructor(props) {
//     super(props);

//     this.onChangeFlightFrom = this.onChangeFlightFrom.bind(this);
//     this.onChangeFlightTo = this.onChangeFlightTo.bind(this);
//     this.onChangeFlightNo = this.onChangeFlightNo.bind(this);
//     this.onChangeFlightDate = this.onChangeFlightDate.bind(this);
//     this.onChangeFlightCabin = this.onChangeFlightCabin.bind(this);
//     this.onChangeFlightSeats = this.onChangeFlightSeats.bind(this);
//     this.onChangeFlightDep = this.onChangeFlightDep.bind(this);
//     this.onChangeFlightArr = this.onChangeFlightArr.bind(this);
//     this.onChangeFlightTer = this.onChangeFlightTer.bind(this);

//     this.state = {
//       flight_from: "",
//       flight_to: "",
//       flightNum: "",
//       flight_date: "",
//       cabin: "",
//       noSeats: "",
//       depTime: "",
//       arrTime: "",
//       terminal: "",
//       records: [],
//     };
//   }
//   // This will get the record based on the id from the database.
//   componentDidMount() {
//     axios
//       .get("http://localhost:5001/record/" + this.props.match.params.id)
//       .then((response) => {
//         this.setState({
//           flight_from: response.data.flight_from,
//           flight_to: response.data.flight_to ,
//           flightNum: response.data.flightNum,
//           flight_date:response.data.flight_date ,
//           cabin:response.data.cabin ,
//           noSeats: response.data.noSeats,
//           depTime: response.data.depTime,
//           arrTime: response.data.arrTime,
//           terminal: response.data.terminal,
//         });
//         console.log(flight_from);
//         console.log(flight_to);
//         console.log(flightNum);
//         console.log(flight_date);
//         console.log(cabin);
//         console.log(noSeats);
//         console.log(depTime);
//         console.log(arrTime);
//         console.log(terminal);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

// //   // These methods will update the state properties.
// //   onChangeFlightFrom(e) {
// //     this.setState({
// //       flight_from: e.target.value,
// //     });
// //   }

// //   onChangeFlightTo(e) {
// //     this.setState({
// //       flight_to: e.target.value,
// //     });
// //   }

// //   onChangeFlightNo(e) {
// //     this.setState({
// //       flightNum: e.target.value,
// //     });
// //   }

// //   onChangeFlightDate(e) {
// //     this.setState({
// //       flight_date: e.target.value,
// //     });
// //   }

// //   onChangeFlightCabin(e) {
// //     this.setState({
// //       cabin: e.target.value,
// //     });
// //   }

// //   onChangeFlightSeats(e) {
// //     this.setState({
// //       noSeats: e.target.value,
// //     });
// //   }

// //   onChangeFlightDep(e) {
// //     this.setState({
// //       depTime: e.target.value,
// //     });
// //   }

// //   onChangeFlightArr(e) {
// //     this.setState({
// //       arrTime: e.target.value,
// //     });
// //   }

// //   onChangeFlightTer(e) {
// //     this.setState({
// //       terminal: e.target.value,
// //     });
// //   }

// //   // This function will handle the submission.
// //   onSubmit(e) {
// //     e.preventDefault();
// //     const newEditedflight = {
// //       flight_from: this.state.flight_from,
// //       flight_to: this.state.flight_to,
// //       flightNum: this.state.flightNum,
// //       flight_date: this.state.flight_date,
// //       cabin: this.state.cabin,
// //       noSeats: this.state.noSeats,
// //       depTime: this.state.depTime,
// //       arrTime: this.state.arrTime,
// //       terminal: this.state.terminal,
// //     };
// //     console.log(newEditedflight);


// //     // This will send a post request to update the data in the database.
// //     axios
// //       .post(
// //         "http://localhost:5001/update/" + this.props.match.params.id,
// //         newEditedflight
// //       )
// //       .then((res) => console.log(res.data));

// //     this.props.history.push("/");
// //     alert('Your Flight Has Been Updated.');
// //     window.location.reload();
// //   }


// // This method will map out the users on the table
// recordList() {
//     return this.state.records.map((currentrecord) => {  
//       return (
//         <Record
//           record={currentrecord}
//           key={currentrecord._id}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//         <div>
//         <h3>Record List</h3>
//         <table className="table table-striped" style={{ marginTop: 20 }}>
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
//           <tbody>{this.recordList()}</tbody>
//         </table>
//       </div>
//     );
//   }

// }

// export default withRouter(Bookings);
