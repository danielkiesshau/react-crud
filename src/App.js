import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Buy some soup',
        },
        {
          id: 2,
          name: 'Buy some clothes',
        },
        {
          id: 3,
          name: 'Buy some games',
        },
        {
          id: 4,
          name: 'Buy something',
        },
      
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRUD React
          </a>
        </header>
        <div className="container">
          <h2 className="text-center p-4">Todos App</h2>
          <ul className="list-group">
            {
              this.state.todos.map(({ name }) => (
                <li className="list-group-item">{name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
