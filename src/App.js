import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {

  state={
    todos: [
      {id: 1, title: "First To Do", content: "I have something to do!"},
      {id: 2, title: "Second To Do", content: "I have something more to do!"},
      {id: 3, title: "Third  To Do", content: "I have too much to do!"}
    ]
  }

  render(){
    return (
        <div>
          <TodoList />
        </div>
      );
  }
}

export default App;
