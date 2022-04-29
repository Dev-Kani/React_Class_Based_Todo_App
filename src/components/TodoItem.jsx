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
            <div style={this.getStyle()} className='todo-items'>
                <div>
                    <input
                        className='todo-checkbox'
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    />
                    <span>{title}</span>
                </div>
                <button onClick={this.props.handleDelete.bind(this, id)}>X</button>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default TodoItem
