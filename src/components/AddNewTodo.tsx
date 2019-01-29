import * as React from 'react';
import { ITodoProps } from '../Models/ITodoProps';
import { ITodoState, InitialState } from '../Models/ITodoState';

export default class AddNewTodo extends React.Component<ITodoProps, ITodoState> {
    constructor(props: ITodoProps) {
        super(props);
        this.state = new InitialState;
    }

    handleChange = (event: any) => {
        if (event.key === "Enter") {
            this.handleClick();
        } else {
            this.setState({
                title: event.target.value
            });
        }
    }

    handleClick = () => {
        const newTodo = this.state;
        this.setState(new InitialState);
        this.props.addTodo(newTodo);
    }

    render() {
        const { buttonName, placeholder } = this.props;
        return (
            <React.Fragment>
                <input
                    maxLength={25}
                    onChange={this.handleChange}
                    onKeyPress={this.handleChange}
                    placeholder={placeholder}
                    value={this.state.title} />
                <div className="center">
                    <button
                        className={'waves-effect waves-light btn-large'}
                        onClick={this.handleClick}>
                        {buttonName}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}