import React, { Component } from 'react'
import logo from './images/11111.jpg';
import './App.css';
import ReactEcharts from 'echarts-for-react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourcedata: [],
      deviceId: 111,
      apiRoot: "http://rap2.taobao.org:38080/app/mock/254956/device/deviceInfo/access",//请求Api
    }
  }
  componentDidMount() {
    //这是一个fetch示例
    fetch(`${this.state.apiRoot}?deviceId=${this.state.deviceId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      mode: 'cors',
      cache: 'default'
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data.data)
        this.setState({
          sourcedata: data.data
        })
      })
  }
  //此为echarts参数配置示例
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
          <p>题目要求：使用相关技术实现图片示例</p>
          <img src={logo} className="Exercise-img" alt="exercise"></img>
          <div>
            <p>echarts调用示例</p>
            <p>echarts官网: https://echarts.apache.org/zh/index.html</p>
            <ReactEcharts
            style={{ height: '500px', width: '500px', background: 'white' }}
            option={this.getOption()}
          >
          </ReactEcharts>
          </div>
          <div>
            <p>fetch请求数据示例</p>
            <ul>
              {this.state.sourcedata.map(item => {
                return <li key={item.name}>
                  <span>{item.name} </span>
                  <span>{item.value} </span>
                </li>
              })}
            </ul>
          </div>
          <p>antd官网: https://ant.design/components/button-cn/</p>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </header>
      </div>
    );
  }
}

