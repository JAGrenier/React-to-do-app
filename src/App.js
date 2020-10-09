import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm'

class App extends Component {

  state={
    todos: [
      {id: 1, title: "First To Do", content: "I have something to do!", urgent: true},
      {id: 2, title: "Second To Do", content: "I have something more to do!",urgent: false},
      {id: 3, title: "Third  To Do", content: "I have too much to do!", urgent: true}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})
    // fetch('url', {method: 'DELETE'})
  }

  render(){
    return (
        <main>
          <h1>To Do App!</h1>
          <TodoForm />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </main>
      );
  }
}

export default App;
