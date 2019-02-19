import React, { Component } from 'react';
import './App.css';
import Elements from './components/Elements/index';
import Button from './components/Button';

class App extends Component {
  state = {
    data: {
      message: '',
    },
    counter: 1,
  };
  componentDidMount() {
    fetch('https://dog.ceo/api/breed/husky/images/random')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  counterChange = event => {
    const eventButton = event.target.textContent;
    if (this.state.counter === 1 && eventButton === '-') {
      return;
    }
    this.setState(state => {
      const counter = eventButton === '+' ? state.counter + 1 : state.counter - 1;
      return { ...state, counter };
    });
  };
  render() {
    return (
      <div className="App">
        <Elements counters={this.state.counter} messages={this.state.data.message} />
        <p className="count_number">{this.state.counter}</p>
        <Button count={this.counterChange} />
      </div>
    );
  }
}

export default App;
