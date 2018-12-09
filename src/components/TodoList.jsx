import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    deleteTodo = (id) => {
        this.props.deleteTodoId(id);
    }

    handleChange = (event, id) => {
        this.props.updateTodo(id, event.target.checked);
    }

    template = ({ id, title, completed }, onClick) => {
        return <div key={id} className={this.props.className}>
            <label>
                <input
                    checked={completed}
                    data-role='check'
                    onChange={(event) => this.handleChange(event, id)}
                    type='checkbox' />
                <span
                    className={'blue-text text-darken-2'}>
                    {title}
                </span>
                <button
                    className='waves-effect waves-light btn right red'
                    onClick={onClick}>
                    <i className="material-icons">delete</i>
                </button>
            </label>
        </div>
    }

    render() {
        const { array, className } = this.props;
        const todoList = array.length ? array.map(x => {
            return this.template(x, () => { this.deleteTodo(x.id) })
        }) : <div className={className}>
                <span className="blue-text text-darken-2">You don't have any todos.</span>
            </div>;

        return (
            <Fragment>
                {todoList}
            </Fragment>
        )
    }
}

TodoList.defaultProps = {
    array: [],
    className: '',
    deleteTodoId: 0
}

TodoList.propTypes = {
    array: PropTypes.array,
    className: PropTypes.string,
    deleteTodoId: PropTypes.oneOfType([PropTypes.func, PropTypes.number])
}

export default TodoList;