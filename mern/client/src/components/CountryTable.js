import React, { Component } from 'react';
import TableRow from './TableRow';
export class CountryTable extends Component {
  
  render() {
    
    let rows = [];

    //generate the table rows
    //based on container representational pattern and Hook, CountryTable should not have business logic
    this.props.data.forEach((dataObj) => {
      rows.push(
        <TableRow
          id={dataObj.id} //ObjectId( req.params.id)
          flight_from={dataObj.flight_from}
          flight_to={dataObj.flight_to}
          flightNum={dataObj.flightNum}
          flight_date={dataObj.flight_date}
          cabin={dataObj.cabin}
          noSeats={dataObj.noSeats} 
          depTime={dataObj.depTime} 
          arrTime={dataObj.arrTime} 
          terminal={dataObj.terminal}
          // _id={dataObj._id}
          />);
    });

    return (
       <div>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>FROM</th>
              <th>TO</th>
              <th>FLIGHT NO.</th>
              <th>DATE</th>
              <th>CABIN</th>
              <th>AVAILABLE SEATS</th>
              <th>DEPARTURE TIME</th>
              <th>ARRIVAL</th>
              <th>TERMINAL</th>
            </tr>
          </thead>
        <tbody className='tableBodyStyle'>
          
          {rows}
        </tbody>
      </table>
      
       </div>

       
       
      // <div>
      //   <table className="table table-striped" style={{ marginTop: 20 }}>
      //     <thead>
      //       <tr>
      //         <th>FROM</th>
      //         <th>TO</th>
      //         <th>FLIGHT NO.</th>
      //         <th>DATE</th>
      //         <th>CABIN</th>
      //         <th>AVAILABLE SEATS</th>
      //         <th>DEPARTURE TIME</th>
      //         <th>ARRIVAL</th>
      //         <th>TERMINAL</th>
      //       </tr>
      //     </thead>
      //     <tbody>{this.recordList()}</tbody>
      //   </table>
      // </div>
      
    )
  }
}

export default CountryTable
