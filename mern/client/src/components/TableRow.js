import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class TableRow extends Component {
  
  render() {
    return (
      <tr>
        {/* <td>{this.props.id} </td> */}
        <td>{this.props.flight_from} </td>
        <td>{this.props.flight_to}</td>
        <td>{this.props.flightNum}</td>
        <td>{this.props.flight_date}</td>
        <td>{this.props.cabin}</td>
        <td>{this.props.noSeats}</td>
        <td>{this.props.depTime}</td>
        <td>{this.props.arrTime}</td>
        <td>{this.props.terminal}</td>
        <td>
        <a
        href={"/book/" + this.props.id}
        onClick={() => {
          if(window.confirm("Are You Sure You Want to Book This Flight?")){
            console.log("");
          }
        }}
      >
        Book
      </a>
    </td>
      </tr>
    )
  }
}

export default TableRow;
