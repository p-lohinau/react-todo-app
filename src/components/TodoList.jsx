import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteTodo } from '../redux/actions/todosActions';

class TodoList extends Component {
    deleteTodo = (id) => {
        this.props.deleteTodo(id);
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
        console.log(this.props);
        const { todoList, className } = this.props;
        const todos = todoList.length ? todoList.map(x => {
            return this.template(x, () => { this.deleteTodo(x.id) })
        }) : <div className={className}>
                <span className="blue-text text-darken-2">You don't have any todos.</span>
            </div>;

        return (
            <Fragment>
                {todos}
            </Fragment>
        )
    }
}

TodoList.defaultProps = {
    className: ''
}

TodoList.propTypes = {
    className: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);