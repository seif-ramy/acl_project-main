import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class Search extends Component {
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
    };
  }

  search = async val => {
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = await res.data.results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

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

    // When post request is sent to the create url, axios will add a new record to the database.
    const searchdata = {
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

    axios
    .post("http://localhost:5000/search", searchdata)
    .then(() => console.log())
    .catch(err => {
      console.error(err);
    });  
    
    // axios
    //   .post("http://localhost:5000/search", searchdata)
    //   .then((res) => console.log(res.data));


    // We will empty the state
    this.setState({
      flight_from: "",
      flight_to: "",
      flightNum: "",
      flight_date: "",
      cabin: "",
      noSeats: "",
      depTime: "",
      arrTime: "",
      terminal: "",
    });

    this.setState({ redirect: "/searchrecord" });

  }

  state = { redirect: null };

  // This following section will display the form that takes the input from the user.
  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
    return (
      <div style={{ marginTop: 22 }}>
        <h3>Search Flights</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Flight From: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_from}
              onChange={this.onChangeFlightFrom}
            />
          </div>
          <div className="form-group">
            <label>Flight To: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_to}
              onChange={this.onChangeFlightTo}
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
            />
          </div>         
          <div className="form-group">
            <label>Flight Date: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.flight_date}
              onChange={this.onChangeFlightDate}
            />
          </div>
          <div className="form-group">
            <label>Flight Number: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.flightNum}
              onChange={this.onChangeFlightNo}
            />
          </div>
          <div className="form-group">
            <label>Flight Departure Time: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.depTime}
              onChange={this.onChangeFlightDep}
            />
          </div>
          <div className="form-group">
            <label>Flight Departure Arrival: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.arrTime}
              onChange={this.onChangeFlightArr}
            />
          </div>
          <div className="form-group">
            <label>Airport Departure Terminal: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.terminal}
              onChange={this.onChangeFlightTer}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

