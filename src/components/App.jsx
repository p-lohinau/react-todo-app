import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';

import 'materialize-css/dist/css/materialize.css';
import '../assets/App.css';

class App extends Component {

  // componentDidMount() {
  //   axios.get('http://localhost:3000/todos').then(({ data }) => {
  //     this.setState({
  //       todoList: data
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

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
    console.table(this.props.todos);
    return (
      <div className="app">
        <h1>Todo list</h1>
        <AddNewTodo
          addTodo={this.addTodo}
          buttonName={'Submit'}
          placeholder={'Let\'s add new todo'} />
        <TodoList
          className={'card-panel'}
          updateTodo={this.updateTodo} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList : state.todos
  }
}

export default connect(mapStateToProps)(App);
