export interface ITodoState {
    id: number;
    completed: boolean;
    title: string
}

export class InitialState implements ITodoState {
    id = 0;
    completed = false;
    title = '';
}