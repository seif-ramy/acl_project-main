import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { NavLink } from "react-router-dom";
export default class Register extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeHomeAddress = this.onChangeHomeAddress.bind(this)
    this.onChangeCountryCode = this.onChangeCountryCode.bind(this)
    this.onChangeTelephoneNumber = this.onChangeTelephoneNumber.bind(this)
    this.onChangePassportNumber = this.onChangePassportNumber.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: "",
      LastName: "",
      HomeAddress: "",
      CountryCode: "",
      TelephoneNumber:"",
      PassportNumber:"",
      username: "",
      email: "",
      password: "",
    };
  }

  // These methods will update the state properties.
  onChangeFirstName(e) {
    this.setState({
      FirstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      LastName: e.target.value,
    });
  }


  onChangeHomeAddress(e) {
    this.setState({
      HomeAddress: e.target.value,
    });
  }
  onChangeCountryCode(e) {
    this.setState({
      CountryCode: e.target.value,
    });
  }

  onChangeTelephoneNumber(e) {
    this.setState({
      TelephoneNumber: e.target.value,
    });
  }

  onChangePassportNumber(e) {
    this.setState({
      PassportNumber: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  
// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newuser = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      HomeAddress: this.state.HomeAddress,
      CountryCode: this.state.CountryCode,
      TelephoneNumber:this.state.TelephoneNumber,
      PassportNumber:this.state.PassportNumber,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5001/user/add", newuser)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      FirstName: "",
      LastName: "",
      HomeAddress: "",
      CountryCode: "",
      TelephoneNumber:"",
      PassportNumber:"",
      username: "",
      email: "",
      password: "",
      
    });

    alert('Registered Successfully.');
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (




      
      <div style={{ marginTop: 22}}>
        <h3>Register</h3>
        <form onSubmit={this.onSubmit}>

        <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.FirstName}
              onChange={this.onChangeFirstName}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.LastName}
              onChange={this.onChangeLastName}
              required
            />
          </div>

          <div className="form-group">
            <label>Home Address: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.HomeAddress}
              onChange={this.onChangeHomeAddress}
              required
            />
          </div>

          <div className="form-group">
            <label>Country Code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.CountryCode}
              onChange={this.onChangeCountryCode}
              required
            />
          </div>

          <div className="form-group">
            <label>Telephone Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.TelephoneNumber}
              onChange={this.onChangeTelephoneNumber}
              required
            />
          </div>

          <div className="form-group">
            <label>Passport Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.PassportNumber}
              onChange={this.onChangePassportNumber}
              required
            />
          </div>


          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              required
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div>         
          
            
          <button type="submit" className="btn btn-outline-primary w-20 mt-4 rounded-pill">
                 Register
             </button>
        </form>
      </div>
    );
  }
}


























// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router';

// const Register = () => {

//   const history = useHistory()

//   const [user, setUser] = useState({
//     username : "",
//     email : "",
//     password : ""
//   });

//   // Handle Inputs
//   const handleInput = (event) =>{
//     let name = event.target.name;
//     let value = event.target.value;

//     setUser({...user, [name]:value});
//   }

//   // Handle Submit
//   const handleSubmit = async (event)=>{
//     event.preventDefault();
//     // Object DeStructuring
//     // Store Object Data into Variables
//     const {username, email, password} = user;
//     try {
//       //It is Submitted on port 3000 by default
//       // Which is Front End but we need to 
//       // Submit it on Backend which is on 
//       // Port 3001. So we need Proxy.
//       const res = await fetch('/register', {
//         method : "POST",
//         headers : {
//           "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({
//           username, email, password
//         })
//       })
//       console.log(res.status)
//       if(res.status === 400 || !res){
//         window.alert("Already Used Details")
//       }else{
//         // You need to Restart the Server for Proxy Works
//         // Now Try Again
//         window.alert("Registered Successfully");
//         history.push('/login')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//     return (
//         <div>
//             <div className="container shadow my-5">
//         <div className="row justify-content-end">
//           <div className="col-md-6 p-5">
//             <form onSubmit={handleSubmit} method="POST">
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="username"
//                   value={user.username}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   name="email"
//                   value={user.email}
//                   onChange={handleInput}
//                 />
//                 <div id="emailHelp" className="form-text">
//                   We'll never share your email with anyone else.
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   name="password"
//                   value={user.password}
//                   onChange={handleInput}
//                 />
//               </div>
//               <div className="mb-3 form-check">
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label className="form-check-label" htmlFor="exampleCheck1">
//                   I Agree Terms and Conditions
//                 </label>
//               </div>
//               <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//         </div>
//     );
// }

// export default Register;
