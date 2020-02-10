import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  time = () => {
    this.setState({count: (this.state.count + 1)})
  }
  startTimer = () => {
    clearInterval(this.timer)
    this.timer =  setInterval(this.time, 500)
  }
  stopTimer = () => {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className='timer'>
        <h2>{this.props.title}</h2>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.startTimer}>Start Counter</button>
          <button onClick={this.stopTimer}>Stop Counter </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App title='Timer with Action' />, document.getElementById('root'));
