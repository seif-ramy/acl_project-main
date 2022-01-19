import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

export default class SignUpForm extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
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

  onChangeEmail(e) {
    this.setState({
        Email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
        Password: e.target.value,
    });
  }

  

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    
    // Require Model
       const Users = require('../../../../server/schema/userSchema.js');
    
       const newuser = new Users({
           
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Password: this.state.Password
    });

    axios
      .post("http://localhost:5001/record/adduser", newuser)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
    });

    alert('Registered Successfully.');
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 22}}>
        <h3>Registeration</h3>
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
            <label>Email: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.Email}
              onChange={this.onChangeEmail}
              required
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password" 
              className="form-control"
              value={this.state.Password}
              onChange={this.onChangePassword}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
