import React, { Component } from 'react';
import { List } from './components';
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
      ],
      editingIndex: null,
      editing: false,
      notification: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.setState = this.setState.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.generateTodoId = this.generateTodoId.bind(this);
    this.alert = this.alert.bind(this);
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
          <Notification
            notification={this.state.notification}
          />
          <input
            type="text"
            name="todo"
            className="my-4 form-control"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          {
            this.state.newTodo.length > 0 ?
              <button
                className={this.state.editing ? "btn-warning mb-3 form-control" : "btn-info mb-3 form-control"}
                onClick={this.state.editing ? this.updateTodo : this.addTodo}
              >
                {this.state.editing ? 'Update todo' : 'Add Todo'}
              </button>
            :
              null
          }
          <ul className="list-group">
            <List
              {...this.state}
              setState={this.setState}
              alert={this.alert}
            />
          </ul>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  updateTodo(index) {
    const { todos, editingIndex, newTodo } = this.state;
    const updatedTodo = todos[editingIndex];
    updatedTodo.name = newTodo;
    const newTodos = [...todos];
    newTodos[editingIndex] = updatedTodo;
    this.setState({ todos: newTodos, editing: false, editingIndex: null });
  }

  addTodo() {
    const { todos, newTodo } = this.state;
    const objTodo = {
      id: this.generateTodoId(),
      name: newTodo
    };
    this.setState({ todos: [...todos,  objTodo] });
    this.alert("Todo added successfully")
  }

  generateTodoId() {
    const lastTodo = this.state.todos[this.state.todos.length - 1];
    if (lastTodo) return lastTodo.id + 1;
    return 1;
  }
  
  alert(notification) {
    this.setState({ notification });
    setTimeout(() => this.setState({ notification: null }), 2000);
  }
}

export default App;

const Notification = ({ notification }) => {
  if (notification === null) return null;
  return (
    <div className="alert alert-success">
      <p className="text-center mt-3">{notification}</p>
    </div>
  );
}