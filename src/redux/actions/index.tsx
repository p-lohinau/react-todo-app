import * as constants from '../constants';
import { ITodo } from '../../Models/Models';

export interface IDeleteTodo {
    type: constants.DELETE_TODO;
    id: number
}

export interface IAddTodo {
    type: constants.ADD_TODO;
    newTodo: ITodo
}

export interface IUpdateTodo {
    type: constants.UPDATE_TODO;
    value: boolean
}

export type TodoAction = IDeleteTodo | IAddTodo | IUpdateTodo;

export function deleteTodo(id: number): IDeleteTodo {
    return {
        type: constants.DELETE_TODO,
        id: id
    };
}
export function addTodo(newTodo: ITodo): IAddTodo {
    return {
        type: constants.ADD_TODO,
        newTodo: newTodo
    };
}
export function updateTodo(id: number, value: boolean): IUpdateTodo {
    return {
        type: constants.UPDATE_TODO,
        value: value
    };
}