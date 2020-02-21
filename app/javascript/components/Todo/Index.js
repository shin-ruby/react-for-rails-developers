import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import uuid from 'uuid'

import Todos from './Todos'
import Header from './Header'
import AddTodo from './AddTodo'
import Welcome from '../Welcome/Welcome'

class Index extends Component {
  state = {
    todos: [
      {id: uuid.v4(), title: 'Judo', completed: false},
      {id: uuid.v4(), title: 'Aikido', completed: true},
      {id: uuid.v4(), title: 'Kongfu', completed: false},
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/welcome" component={ Welcome } />
        </div>
      </Router>
    );
  }
}

export default Index
