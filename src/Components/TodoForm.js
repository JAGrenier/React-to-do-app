import React, { Component } from 'react'

export default class TodoForm extends Component {


    state={
        title: "",
        content: '',
        urgent: false
    }

    handleChange = (event) => {
        const {name} = event.target
        const value = name === 'urgent' ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="todo-form">
                <h2>Add a new Todo</h2>
                <label>Title</label>
                <input name="title" value={this.state.title} onChange={this.handleChange} />
                <label>Content</label>
                <input name="content" value={this.state.content} onChange={this.handleChange} />
                <label>Urgent?</label>
                <input type="checkbox" name="urgent" value={this.state.urgent} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}

