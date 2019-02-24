import React, { Component } from 'react';
import { List } from './components';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import loadingGif from './assets/icons/loading.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
      todos: [
      ],
      editingIndex: null,
      editing: false,
      notification: null,
      loading: true,
    };
    this.apiUrl = 'https://5c72bf54ba65bb0014ebf020.mockapi.io'
    this.handleChange = this.handleChange.bind(this);
    this.setState = this.setState.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.generateTodoId = this.generateTodoId.bind(this);
    this.alert = this.alert.bind(this);
  }
  
  componentWillMount() {
  }
  
  async componentDidMount() {
    const response = await Axios.get(`${this.apiUrl}/todos`);
    this.setState({ todos: response.data, loading: false });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img style={{ height: 5 }} src={logo} className="App-logo" alt="logo" />
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
          { (this.state.loading) && <img style={{ height: 150 }} src={loadingGif} /> }
          {
            (!this.state.loading || this.state.editing) &&
              <ul className="list-group">
                <List
                  {...this.state}
                  apiUrl={this.apiUrl}
                  setState={this.setState}
                  alert={this.alert}
                />
              </ul>
          }
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  async updateTodo(index) {
    const { todos, editingIndex, newTodo } = this.state;
    const todo = todos[editingIndex];
    todo.name = newTodo;
    const response = await Axios.put(`${this.apiUrl}/todos/${todo.id}`, todo);
    const newTodos = [...todos];
    newTodos[editingIndex] = response.data;
    this.setState({ todos: newTodos, editing: false, editingIndex: null, newTodo: '' });
  }

  async addTodo() {
    const { todos, newTodo } = this.state;
    const objTodo = {
      name: newTodo
    };

    const response = await Axios.post(`${this.apiUrl}/todos`, objTodo)
    // console.log(response);
    this.setState({ todos: [...todos,  response.data] });
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