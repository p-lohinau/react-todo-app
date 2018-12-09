import React, { Component } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';

import 'materialize-css/dist/css/materialize.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/todos').then(({ data }) => {
      this.setState({
        todoList: data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  addTodo = (newTodo) => {
    if (!!newTodo && !!newTodo.title && newTodo !== '') {
      axios.post('http://localhost:3000/todos', newTodo)
        .then((response) => {
          const updatedPersonsList = [...this.state.todoList, response.data];
          this.setState({
            todoList: updatedPersonsList
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      console.log('addTodo error - wrong parameter');
    }
  }

  deleteTodo = (id) => {
    if (!!id || id !== '') {
      axios.delete(`http://localhost:3000/todos/${id}`)
        .then((response) => {
          const updatedList = this.state.todoList.filter(x => x.id !== id);
          this.setState({
            todoList: updatedList
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      console.log('deleteTodo error - wrong parameter');
    }
  }

  updateTodo = (id, value) => {
    if ((!!id || id !== '') || (!!value || value !== '')) {
      axios.patch(`http://localhost:3000/todos/${id}`, { completed: value })
        .then((response) => {
          const { todoList } = this.state;
          const index = todoList.findIndex((obj => obj.id === id));
          todoList[index].completed = value;
          this.setState({
            todoList: todoList
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      console.log('completedTodo error - wrong parameter');
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Todo list</h1>
        <AddNewTodo
          addTodo={this.addTodo}
          buttonName={'Submit'}
          placeholder={'Let\'s add new todo'} />
        <TodoList
          array={this.state.todoList}
          className={'card-panel'}
          deleteTodoId={this.deleteTodo}
          updateTodo={this.updateTodo} />
      </div>
    );
  }
}

export default App;
