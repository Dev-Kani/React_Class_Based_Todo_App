import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                />
                <span>{title}</span>
                <button onClick={this.props.handleDelete.bind(this, id)}>Delete</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropsTypes.func.isRequired,
    handleDelete: PropsTypes.func.isRequired
}

export default TodoItem
