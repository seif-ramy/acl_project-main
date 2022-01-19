import React, { Component } from 'react';

export class SearchBar extends Component {

  handleOnChange = (e) => {
    //console.log('value: '+e.target.value+ ' name: '+ e.target.name);
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };

  render() {
    return (
      <form className='SearchBarStyle'>
        <input
          type="text"
          name='flight_from'
          value={this.props.flight_from}
          onChange={this.handleOnChange}
          placeholder='From'/>
        <input 
          type="text" 
          name='flight_to'
          value={this.props.flight_to}
          onChange={this.handleOnChange}
          placeholder='To'/>
        <input 
          type="text" 
          name='flightNum'
          value={this.props.flightNum}
          onChange={this.handleOnChange}
          placeholder='Flight Number'/>
          <input 
          type="text"
          name='cabin'
          value={this.props.cabin}
          onChange={this.handleOnChange}
          placeholder='Cabin'/>
        <input 
          type="text" 
          name='noSeats'
          value={this.props.noSeats}
          onChange={this.handleOnChange}
          placeholder='Seats'/>
        <input 
          type="text" 
          name='flight_date'
          value={this.props.flight_date}
          onChange={this.handleOnChange}
          placeholder='Flight Date'/>
          <input 
          type="text"
          name='depTime'
          value={this.props.depTime}
          onChange={this.handleOnChange}
          placeholder='Departure Time'/>
        <input 
          type="text" 
          name='arrTime'
          value={this.props.arrTime}
          onChange={this.handleOnChange}
          placeholder='Arrival Time'/>
        <input 
          type="text" 
          name='terminal'
          value={this.props.terminal}
          onChange={this.handleOnChange}
          placeholder='Terminal'/>
      </form>
    )
  }
}

export default SearchBar
