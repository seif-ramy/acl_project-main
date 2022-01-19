import React,  {Component}  from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";

class UserEdit extends Component {
  
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
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5001/user/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
            FirstName: response.data.FirstName,
            LastName: response.data.LastName ,
            HomeAddress: response.data.HomeAddress,
            CountryCode:response.data.CountryCode ,
            TelephoneNumber:response.data.TelephoneNumber ,
            PassportNumber: response.data.PassportNumber,
            username: response.data.username,
            email: response.data.email,
            password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    const newUser = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        HomeAddress: this.state.HomeAddress,
        CountryCode: this.state.CountryCode,
        TelephoneNumber: this.state.TelephoneNumber,
        PassportNumber: this.state.PassportNumber,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
    };
    console.log(newUser);


    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5001/userupdate/" + this.props.match.params.id,
        newUser
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/userProfile");
    alert('Your Details Have Been Updated.');
    window.location.reload();
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div style={{ marginTop: 22 }}>
        <h3> Update Details</h3>

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
          {/* <div className="form-group">
            <label>Email: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required
            />
          </div> */}
          {/* <div className="form-group">
            <label>Password: </label>
            <input
              type="password" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required
            />
          </div> */}
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(UserEdit);
