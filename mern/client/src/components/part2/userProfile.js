import React, { Component } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
const Record = (props) => (
  <tr>
      <td>{props.record.FirstName}</td>
      <td>{props.record.LastName}</td>
      <td>{props.record.HomeAddress}</td>
      <td>{props.record.CountryCode}</td>
      <td>{props.record.TelephoneNumber}</td>
      <td>{props.record.PassportNumber}</td>
      <td>{props.record.username}</td>
      <td>{props.record.email}</td>
      <td>{props.record.password}</td>
      <td>
      <Link to={"/user/search"}>Search Flights</Link> |
      <Link to={"/changePass"}>Change Password</Link> |
      <Link to={"/UserEdit/" + props.record._id}>Edit Details</Link>
    </td>
  </tr>
);

   

export default class UserProfile extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

//   // This method will get the data from the database.
//   componentDidMount() {
//     axios
//       .get("http://localhost:5001/users/")
//       .then((response) => {
//         this.setState({ records: response.data });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

componentDidMount() {
    axios
      .get("http://localhost:5001/userProfile")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

//   // This will get the record based on the id from the database.
//   componentDidMount() {
//     axios
//       .get("http://localhost:5001/user/" + this.props.match.params.id)
//       .then((response) => {
//         this.setState({
//           username: response.data.username,
//           email: response.data.email ,
//           password: response.data.password,
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }


  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {  
      return (
        <Record
          record={currentrecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Home Address</th>
            <th>Country Code</th>
            <th>Telephone Number</th>
            <th>Passport Number</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}

















// import React, { useState, useEffect } from "react";
// import { Container, Typography, Button } from "@material-ui/core";
// import { Link, useHistory } from "react-router-dom";

// import axios from "axios";

// const UserProfile = () => {
//   const [user, setUser] = useState({});
// //   const user = require(/Users/seiframy/Downloads/acl_project-main/mern/client/src/components/userSchema.js);
// console.log(JSON.parse(localStorage.getItem("profile")))
//   const email = JSON.parse(localStorage.getItem("profile")).user.email;
//   const history = useHistory();
//   const onSubmit = () => {
//     history.push("/edit_user/" + user.email);
//   };

//   const fetchUserInfoUrl = "http://localhost:5001/user/" + email;
//   console.log(fetchUserInfoUrl);
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/user/" + email)
//       .then((response) => {
//         console.log(response);
//         setUser(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, [email]);
//   return user?._id ? (
//     <Container component="main" align="left">
//       <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//         <Typography variant="h2">Profile</Typography>
//         <Typography variant="h6">
//           Username: {user.username}
//         </Typography>
//         <Typography variant="h6">Email: {user.email}</Typography>
//         <Typography variant="h6">
//           Email: {user.email}
//         </Typography>
//         <Typography variant="h6">
//           Password: {user.password}

//         </Typography>
//         <Button
//           variant="contained"
//           onClick={() => {
//             onSubmit();
//           }}
//         >
//           Edit Profile
//         </Button>
//         {/* <Button
//           variant="contained"
//           component={Link}
//           to={"/change_password"}
         
//         >
//           Change Password
//         </Button> */}
//       </div>
//     </Container>
//   ) : null;
// };

// export default UserProfile;
