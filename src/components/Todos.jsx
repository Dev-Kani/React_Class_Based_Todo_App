import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                handleDelete={this.props.handleDelete}
            />
        ))
    }
}

// PropTypes
Todos.propsTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default Todos