import React,  {Component}  from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";

class Edit extends Component {
  
  constructor(props) {
    super(props);

    this.onChangeFlightFrom = this.onChangeFlightFrom.bind(this);
    this.onChangeFlightTo = this.onChangeFlightTo.bind(this);
    this.onChangeFlightNo = this.onChangeFlightNo.bind(this);
    this.onChangeFlightDate = this.onChangeFlightDate.bind(this);
    this.onChangeFlightCabin = this.onChangeFlightCabin.bind(this);
    this.onChangeFlightSeats = this.onChangeFlightSeats.bind(this);
    this.onChangeFlightDep = this.onChangeFlightDep.bind(this);
    this.onChangeFlightArr = this.onChangeFlightArr.bind(this);
    this.onChangeFlightTer = this.onChangeFlightTer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangeFlightFrom(e) {
    this.setState({
      flight_from: e.target.value,
    });
  }

  onChangeFlightTo(e) {
    this.setState({
      flight_to: e.target.value,
    });
  }

  onChangeFlightNo(e) {
    this.setState({
      flightNum: e.target.value,
    });
  }

  onChangeFlightDate(e) {
    this.setState({
      flight_date: e.target.value,
    });
  }

  onChangeFlightCabin(e) {
    this.setState({
      cabin: e.target.value,
    });
  }

  onChangeFlightSeats(e) {
    this.setState({
      noSeats: e.target.value,
    });
  }

  onChangeFlightDep(e) {
    this.setState({
      depTime: e.target.value,
    });
  }

  onChangeFlightArr(e) {
    this.setState({
      arrTime: e.target.value,
    });
  }

  onChangeFlightTer(e) {
    this.setState({
      terminal: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedflight = {
      flight_from: this.state.flight_from,
      flight_to: this.state.flight_to,
      flightNum: this.state.flightNum,
      flight_date: this.state.flight_date,
      cabin: this.state.cabin,
      noSeats: this.state.noSeats,
      depTime: this.state.depTime,
      arrTime: this.state.arrTime,
      terminal: this.state.terminal,
    };
    console.log(newEditedflight);


    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5001/update/" + this.props.match.params.id,
        newEditedflight
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
    alert('Your Flight Has Been Updated.');
    window.location.reload();
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div style={{ marginTop: 22 }}>
        <h3> Update Flight</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
          <label>Flight From: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_from}
              onChange={this.onChangeFlightFrom}
              required
            />
          </div>
          <div className="form-group">
            <label>Flight To: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_to}
              onChange={this.onChangeFlightTo}
              required
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="First"
                checked={this.state.cabin === "First"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">First</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Business"
                checked={this.state.cabin === "Business"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">Business</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Economy"
                checked={this.state.cabin === "Economy"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">Economy</label>
            </div>
          </div>
          <div className="form-group">
            <label>Number of Seats Available: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.noSeats}
              onChange={this.onChangeFlightSeats}
              required
            />
          </div>         
          <div className="form-group">
            <label>Flight Date: </label>
            <input
              type="date" 
              className="form-control"
              value={this.state.flight_date}
              onChange={this.onChangeFlightDate}
              required
            />
          </div>
          <div className="form-group">
            <label>Flight Number: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.flightNum}
              onChange={this.onChangeFlightNo}
              required
            />
          </div>
          <div className="form-group">
            <label>Flight Departure Time: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.depTime}
              onChange={this.onChangeFlightDep}
              required
            />
          </div>
          <div className="form-group">
            <label>Flight Arrival Time: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.arrTime}
              onChange={this.onChangeFlightArr}
              required
            />
          </div>
          <div className="form-group">
            <label>Airport Departure Terminal: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.terminal}
              onChange={this.onChangeFlightTer}
              required
            />
          </div>
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

export default withRouter(Edit);
