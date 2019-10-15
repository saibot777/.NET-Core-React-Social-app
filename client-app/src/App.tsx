import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    this.setState({
      values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Reactivities</h1>
        <ul>
          {this.state.values.map((value: any) => (
            <li>{value.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
