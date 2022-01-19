import React, { Component } from 'react';

export class SearchBar2 extends Component {

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
          value={this.props.flight_from }
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
          name='cabin'
          value={this.props.cabin}
          onChange={this.handleOnChange}
          placeholder='Cabin'/>
        <input 
          type="text" 
          name='noSeats'
          value={this.props.noSeats}
          onChange={this.handleOnChange}
          placeholder='Number of Seats'/>
        <input 
          type="text" 
          name='flight_date'
          value={this.props.flight_date}
          onChange={this.handleOnChange}
          placeholder='Flight Date'/>
        
      </form>
    )
  }
}

export default SearchBar2
