import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ array, className, deleteTodoId }) => {

    const deleteTodo = (id) => {
        deleteTodoId(id);
    }

    const template = (id, name, onClick) => {
        return <div key={id} className={className} onClick={onClick}>
            <span className={'blue-text text-darken-2'}>{name}</span>
        </div>
    }
    const todoList = array.length !== 0 ? array.map(x => {
        return template(x.id, x.name, () => { deleteTodo(x.id) })
    }) : template(0, 'You don\'t have any todo\'s');
    return (
        <Fragment>
            {todoList}
        </Fragment>
    )
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