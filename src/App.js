import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddNewTodo from './components/AddNewTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [{ id: 0, name: 'buy a milk' }, { id: 1, name: 'eat some chips' }]
    }
  }

  addTodo = (newTodo) => {
    if (newTodo !== undefined && newTodo.name !== '') {
      newTodo.id = Math.random();
      const updatedPersonsList = [...this.state.todoList, newTodo];
      this.setState({
        todoList: updatedPersonsList
      });
    }
    else {
      console.log('addTodo error - empty parameter');
    }
  }

  deleteTodo = (id) => {
    if (id !== null || id !== undefined || id !== '') {
      const updatedList = this.state.todoList.filter(x => x.id !== id);
      this.setState({
        todoList: updatedList
      });
    }
    else {
      console.log('deleteTodo error - empty parameter');
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Todo list</h1>
        <TodoList array={this.state.todoList} deleteTodoId={this.deleteTodo} className={'card-panel'} />
      </div>
    );
  }
}

export default App;
