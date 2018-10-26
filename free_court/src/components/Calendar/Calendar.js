import React, { Component } from 'react';

import './styles.css';
import { CalendarBox } from '../CalendarBox';



class CalComponent extends Component {

  createTable = () => {
      let table = []
      // Outer loop to create parent
      for (let i = 0; i < 3; i++) {
        let children = []
        //Inner loop to create children
        for (let j = 0; j < 5; j++) {
          //children.push(<td>{`Column ${j + 1}`}</td>)
          children.push(<td><CalendarBox/></td>)
        }
        //Create the parent and add the children
        table.push(<tr>{children}</tr>)
      }
      return table
    }

  render() {
    return (

      <table style={{
        width: "550px",
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

    );
  }
}

export { CalComponent };
