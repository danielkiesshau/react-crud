import React from 'react';
import Axios from 'axios';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  render () {
    const { todos, editing } = this.props;
    if (editing) return null;
    const todosElements = todos.map(({ id, name }, index) => (
      <li
        key={id}
        className="list-group-item"
      >
        <button
          className="btn-sm mr-4 btn btn-warning"
          onClick={(ev) => this.editTodo(index)}
        >
          U
        </button>
        {name}
        <button
          className="btn-sm ml-4 btn btn-danger"
          onClick={(ev) => this.deleteTodo(index)}
        >
          X
        </button>
      </li>
    ));

    return todosElements;
  }

 async  deleteTodo(index) {
    const { todos, setState, alert } = this.props;
    const todo = todos[index];
    const newTodos = [...todos];
    await Axios.delete(`${this.props.apiUrl}/todos/${todo.id}`)
    newTodos.splice(index, 1);
    setState({ ...this.props, todos: newTodos, newTodo: '', editing: false });
    alert("Todo deleted succesfully")
  }
  
  editTodo(index) {
    const todo = this.props.todos[index];
    this.props.setState({
      editing: true,
      newTodo: todo.name,
      editingIndex: index,
    });
  }
}