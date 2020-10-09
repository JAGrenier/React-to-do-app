import React from 'react'

export default ({id, title, content, urgent})=>{
    return (
        <li className={urgent ? "todo-item urgent": "todo-item"}>
            <h2>{title}</h2>
            <p>{content}</p>
        </li>
    )
}
