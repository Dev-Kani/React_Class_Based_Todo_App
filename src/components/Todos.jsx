import React, { Component } from 'react'
import TodoItem from './TodoItem'
// import PropTypes from 'prop-types'

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
    todos: PropsTypes.array.isRequired,
    markComplete: PropsTypes.func.isRequired,
    handleDelete: PropsTypes.func.isRequired
}

export default Todos