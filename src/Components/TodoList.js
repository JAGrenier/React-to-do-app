import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
    
    const showTodos = todos.map(todo => <TodoItem key={todo.id} todo={todo} /> ) 

    return (
        <ul className="to-do-list">
            {showTodos}
        </ul>
    )
}
