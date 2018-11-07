import React, { Component } from 'react';
import _ from 'lodash';


import './styles.css';



class CalComponent extends Component {

  createTable = () => {
      return (
          _.map(this.props.sched, (item, index) => {
              let color = ""

              if (item == "Closed"){
                color = "#ff0000"
              }
              else {
                color = "#00ff00"
              }
              return (
                <tr style={{width: "500"}}>
                  <td> {`${index}:00`} </td>
                  <td style={{
                    width: "70%",
                    backgroundColor: `${color}` }}>
                  </td>
                </tr>
              )
            })
      )
    }

  render() {
    return (
      <div className="center">
        <table style={{
          width:"500"
        }}>
          {this.createTable()}
        </table>
      </div>

    );
  }
}

export { CalComponent };
