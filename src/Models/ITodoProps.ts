import { ITodo } from "./Models";

export interface ITodoProps {
    todoList: Array<ITodo>;
    className: string;
    buttonName: string;
    placeholder: string;
    addTodo(newTodo: ITodo): void;
    deleteTodo(id: number): void;
    updateTodo(id: number, event: any): void;
}