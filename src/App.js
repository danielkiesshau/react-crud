import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
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
          <input
            type="text"
            name="todo"
            className="my-4 form-control"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button
            className="btn-info mb-3 form-control"
            onClick={this.addTodo}
          >
            Add Todo
          </button>
          <ul className="list-group">
            {
              this.state.todos.map(({ id, name }) => (
                <li
                  key={id}
                  className="list-group-item"
                >
                  {name}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  addTodo() {
    const { todos, newTodo } = this.state;
    const id = todos.length - 1;
    const objTodo = {
      id,
      name: newTodo
    };
    this.setState({ ...this.state, todos: [...todos,  objTodo]});
  }
}

export default App;
