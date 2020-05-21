import React, { Component } from 'react'
import logo from './images/demopage.png';
import './App.css';
import ReactEcharts from 'echarts-for-react'

export default class App extends Component {
  getOption = () => {
    let option = {
      xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    };
    return option;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img  src={logo} className="Exercise-img" alt="exercise"></img>
          <ReactEcharts
              style={{ height: '500px', width: '500px' ,background:'white'}}
              option={this.getOption()}
            >
          </ReactEcharts>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

