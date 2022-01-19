import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import SearchBar from './SearchBar'
import CountryTable from './CountryTable2';

export default class SearchRecord2 extends Component {
    constructor(props) {
        super(props);
        this.data = []; // this data should not live in state
        this.state = { 
        records: [],
        flight_from: '',
        flight_to: '',
        flightNum:'',
        flight_date: '',
        cabin: '',
        noSeats: '',
        depTime: '',
        arrTime: '',
        terminal: '',
        isLoading: true,
        };
      }

      // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5001/record/")
      .then((response) => {
        this.setState({ records: response.data });
        let array = [];
        for (let i = 0; i < response.data.length; i++) {
          let entry = {};
          //key value pairs
          entry.flight_from = response.data[i].flight_from;
          entry.flight_to = response.data[i].flight_to;
          entry.flightNum = response.data[i].flightNum;
          entry.flight_date = response.data[i].flight_date;
          entry.cabin = response.data[i].cabin;
          entry.noSeats = response.data[i].noSeats;
          entry.depTime = response.data[i].depTime;
          entry.arrTime = response.data[i].arrTime;
          entry.terminal = response.data[i].terminal;
          array[i] = entry;
        }
        this.data = array;
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  
  
  
  handleSearchEvents = (title, name) => {
    this.setState({ [name]: title });
}
    
    render() {
    console.log(this.data); // data is array of objects
    const filteredData1 = this.data.filter((dataObj)=> 
    (dataObj.flight_from.indexOf(this.state.flight_from) !== -1)&&
    (dataObj.flight_to.indexOf(this.state.flight_to) !== -1)&&
    (dataObj.flightNum.indexOf(this.state.flightNum) !== -1)&&
    (dataObj.flight_date.indexOf(this.state.flight_date) !== -1)&&
    (dataObj.cabin.indexOf(this.state.cabin) !== -1)&&
    (dataObj.noSeats.indexOf(this.state.noSeats) !== -1)&&
    (dataObj.depTime.indexOf(this.state.depTime) !== -1)&&
    (dataObj.arrTime.indexOf(this.state.arrTime) !== -1)&&
    (dataObj.terminal.indexOf(this.state.terminal) !== -1));

    
    
    return (
      <div className="App">
        <SearchBar
          flight_from={this.state.flight_from}
          flight_to={this.state.flight_to}
          flightNum={this.state.flightNum}
          flight_date={this.state.flight_date}
          cabin={this.state.cabin}
          noSeats={this.state.noSeats}
          depTime={this.state.depTime}
          arrTime={this.state.arrTime}
          terminal={this.state.terminal}
          handleSearchEvents={this.handleSearchEvents} />

        <h3>Flights </h3>

        <CountryTable
          flight_from={this.state.flight_from}
          flight_to={this.state.flight_to}
          flightNum={this.state.flightNum}
          flight_date={this.state.flight_date}
          cabin={this.state.cabin}
          noSeats={this.state.noSeats}
          depTime={this.state.depTime}
          arrTime={this.state.arrTime}
          terminal={this.state.terminal}
          data={filteredData1} /> {/* should pass filtered data into CountryTable*/}
        
      </div>
    );
      
      }
}
