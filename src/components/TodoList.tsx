import * as React from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';
import { ITodo } from '../Models/Models';
import { ITodoProps } from '../Models/ITodoProps';
import { ITodoState } from '../Models/ITodoState';

function TodoList(props: ITodoProps) {
    deleteTodo = (id: number) => {
        props.deleteTodo(id);
    }

    handleChange = (event: any, id: number) => {
        props.updateTodo(id, event.target.checked);
    }

    template = ({ id, title, completed }: ITodo, onClick: any) => {
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
    //console.log(this.props);
    const { todoList, className } = props;
    const todos: any = todoList.length ? todoList.map(x => {
        return this.template(x, () => { this.deleteTodo(x.id) })
    }) : <div className={className}>
            <span className="blue-text text-darken-2">You don't have any todos.</span>
        </div>;

    return (
        <React.Fragment>
            {todos}
        </React.Fragment>
    )
}

export function mapStateToProps(state: ITodoState) {
    return {
        todoList: state
    }
}

export function mapDispatchToProps(dispatch: React.Dispatch<actions.TodoAction>) {
    return {
        deleteTodo: (id: number) => dispatch(actions.deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);