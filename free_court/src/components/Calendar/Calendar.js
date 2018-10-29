import React, { Component } from 'react';

import './styles.css';
import { CalendarBox } from '../CalendarBox';



class CalComponent extends Component {

  createTable = () => {
      let table = []
      // Outer loop to create parent
      for (let i = 5; i < 25; i++) {
        let children = []
        //Inner loop to create children\

        if (this.props.sched[i] == "Closed"){

          children.push(<td> {`${i}:00`} </td>)
          children.push(<td style={{
            width: "70%",
            backgroundColor: "#ff0000"}}>
          </td>)
        }
        else {
          children.push(<td> {`${i}:00`} </td>)
          children.push(<td style={{
            width: "70%",
            backgroundColor: "#00ff00"}}>
          </td>)
        }
        //children.push(<td></td>)
        //Create the parent and add the children
        table.push(<tr
          style={{
          width: "100"
          }}>{children}</tr>)
      }
      return table
    }

  render() {
    return (
      <div className="center">
        <table style={{
          width:"500"
          // minWidth: "550px",
          // borderLeft: "solid",
          // borderColor: "RGBa(61, 61, 61,.3)",
          // borderTopRightRadius: "20px",
          // borderTopLeftRadius: "20px",
          // borderBottomRightRadius: "10px",
          // borderBottomLeftRadius: "10px"
        }}>
          {this.createTable()}
        </table>
      </div>

    );
  }
}

export { CalComponent };
